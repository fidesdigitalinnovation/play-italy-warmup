import { EntityType } from "@libs/const";
import { APIGatewayProxyHandler } from "aws-lambda";
import { ProjectEntity } from "src/entity/project.entity";



export const handler: APIGatewayProxyHandler = async (_event, _context) => {

    console.log(EntityType[EntityType.PROJECT]);
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'HOME PAGE',
        projectName: 'Play ITALY',
        page: 'HOME PAGE',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/',
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'SEARCH ',
        projectName: 'Play Italy',
        page: 'SEARCH',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/tours-destinations?tourType=&destination=',
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'DETAIL',
        projectName: 'Play Italy',
        page: 'DETAIL',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/detail/641c77c0792306719b04f48e/the-best-of-sorrento-the-amalfi-coast?isPremium=false',
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'PLAY_WITH_US',
        projectName: 'Play Italy',
        page: 'PLAY_WITH_US',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/play-with-us',
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'PLAY_WITH_US',
        projectName: 'Play Italy',
        page: 'PLAY_WITH_US',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/play-with-us',
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'FAQ',
        projectName: 'Play Italy',
        page: 'FAQ',
        url: 'https://develop.d2i5dn5rckqlbl.amplifyapp.com/faq',
        concurrency: 1
      })
   

    return {
        statusCode: 200,
        body: 'OK'
    }

   
}
