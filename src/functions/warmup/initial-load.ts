import { EntityType } from "@libs/const";
import { APIGatewayProxyHandler } from "aws-lambda";
import { ProjectEntity } from "src/entity/project.entity";


const basePath = process.env.BASE_PATH
export const handler: APIGatewayProxyHandler = async (_event, _context) => {

    console.log(EntityType[EntityType.PROJECT]);
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'HOME PAGE',
        projectName: 'Play ITALY',
        page: 'HOME PAGE',
        url: basePath,
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'SEARCH ',
        projectName: 'Play Italy',
        page: 'SEARCH',
        url: `${basePath}tours-destinations?tourType=&destination=`,
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'DETAIL',
        projectName: 'Play Italy',
        page: 'DETAIL',
        url: `${basePath}detail/641c77c0792306719b04f48e/the-best-of-sorrento-the-amalfi-coast?isPremium=false`,
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'PLAY_WITH_US',
        projectName: 'Play Italy',
        page: 'PLAY_WITH_US',
        url: `${basePath}play-with-us`,
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'PLAY_WITH_US',
        projectName: 'Play Italy',
        page: 'PLAY_WITH_US',
        url: `${basePath}play-with-us`,
        concurrency: 2
      })
    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'FAQ',
        projectName: 'Play Italy',
        page: 'FAQ',
        url: `${basePath}faq`,
        concurrency: 1
      })

    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'Contacts',
        projectName: 'Play Italy',
        page: 'FAQ',
        url: `${basePath}contacts`,
        concurrency: 1
      })

    await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'ITALIAN_STORIES',
        projectName: 'Play Italy',
        page: 'ITALIAN_STORIES',
        url: `${basePath}italian-stories`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'ITALIAN_STORIES',
        projectName: 'Play Italy',
        page: 'ITALIAN_STORIES',
        url: `${basePath}italian-stories`,
        concurrency: 1
      })
    
      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'ITALIAN_STORIES_ID',
        projectName: 'Play Italy',
        page: 'ITALIAN_STORIES_ID',
        url: `${basePath}italian-stories/11`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'TERMS',
        projectName: 'Play Italy',
        page: 'TERMS',
        url: `${basePath}info/terms`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'PRIVACY',
        projectName: 'Play Italy',
        page: 'PRIVACY',
        url: `${basePath}info/privacy`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: '500',
        projectName: 'Play Italy',
        page: '500',
        url: `${basePath}500`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: '404',
        projectName: 'Play Italy',
        page: '404',
        url: `${basePath}404`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'Booking',
        projectName: 'Play Italy',
        page: 'Booking',
        url: `${basePath}booking`,
        concurrency: 1
      })

      await ProjectEntity.put({
        project: 'Play Italy',
        functionality: 'USER_PAGE',
        projectName: 'Play Italy',
        page: 'USER_PAGE',
        url: `${basePath}user-page`,
        concurrency: 1
      })

    return {
        statusCode: 200,
        body: 'OK'
    }

   
}
