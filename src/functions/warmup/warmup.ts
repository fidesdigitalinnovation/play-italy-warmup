import { EntityType } from "@libs/const";
import { buildEntityPK } from "@libs/utils";
import { APIGatewayProxyHandler } from "aws-lambda";
import { from, lastValueFrom, mergeMap, range, tap, toArray } from "rxjs";
import { ProjectEntity } from "src/entity/project.entity";
import { IProject } from "src/model/project.model";
import axios from "axios";


export const handler: APIGatewayProxyHandler = async (_event, _context) => {

    await lastValueFrom(from(ProjectEntity.query(buildEntityPK(EntityType[EntityType.PROJECT], 'Play Italy'), {
        limit: 50
    }
    )).pipe(
        mergeMap(res => from(res.Items as IProject[])),
        mergeMap(project => {
            return range(0, project.concurrency)
                .pipe(mergeMap(_occurrency => {
                    return from(axios.get(project.url))
                            .pipe(tap(_e => {
                                console.log(`${project.url} := ${_occurrency}`)
                            }))
                }), toArray())
        }),
        toArray()))

    return {
        statusCode: 200,
        body: 'OK'
    }


}
