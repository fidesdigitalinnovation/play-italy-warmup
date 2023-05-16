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
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'FAQ ',
    projectName: 'Play Italy',
    page: 'FAQ',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/faq',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'TOUR',
    projectName: 'Play Italy',
    page: 'TOUR DESTINATION',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/tours-destinations',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Contacts',
    projectName: 'Play Italy',
    page: 'Contacts ',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/contacts',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Italian Stories',
    projectName: 'Play Italy',
    page: 'Italian Stories',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/italian-stories',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Italian Story',
    projectName: 'Play Italy',
    page: 'Italian Story',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/italian-stories/6421515fc3ec27d381bc6be6',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Details',
    projectName: 'Play Italy',
    page: 'Details',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/detail/640f4f13eb4b22063254d3e7/florence-great-art-crafts-4-days-3-nights',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Play with us',
    projectName: 'Play Italy',
    page: 'Play With Us',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/play-with-us',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Info Terms',
    projectName: 'Play Italy',
    page: 'Info Terms',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/info/terms',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Info Privacy',
    projectName: 'Play Italy',
    page: 'Info Terms',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/info/privacy',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: '404',
    projectName: 'Play Italy',
    page: 'Page 404',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/404',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: '500',
    projectName: 'Play Italy',
    page: 'Page 500',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/500',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Booking',
    projectName: 'Play Italy',
    page: 'Page Booking',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/booking',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'User Page',
    projectName: 'Play Italy',
    page: 'User Page',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/user-page',
    concurrency: 1
  })
  await ProjectEntity.put({
    project: 'Play Italy',
    functionality: 'Search Tour',
    projectName: 'Play Italy',
    page: 'Search Tour',
    url: 'https://release-1-0.d15g1m0bgzxfo4.amplifyapp.com/tours-destinations?tourType=&destination=Milan',
    concurrency: 1
  })


  return {
    statusCode: 200,
    body: 'OK'
  }


}
