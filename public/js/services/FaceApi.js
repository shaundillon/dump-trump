import {request} from './request';
import {config} from '../config/config';

export const recognize = (imageUrl) => {
  const reqBody = JSON.stringify({
      image: imageUrl,
      gallery_name: 'Trump'
  });
  return request(
    `${config.apiUrl}/recognize`,
    {
      method: 'post',
      body: reqBody,
      headers: {
        'Content-Type': 'application/json',
        'app_id': '45478bd5',
        'app_key': '0666bcda80b3afe9bd270ad321063880'
      }
    }
  )
}
