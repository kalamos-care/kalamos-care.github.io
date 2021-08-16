import axios, { AxiosResponse } from 'axios';
//import { ClinicType } from '../models/clinic.interface';

const instance = axios.create({
    baseURL: 'https://underwater.hack.fail/v1',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	//post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	//put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	//delete: (url: string) => instance.delete(url).then(responseBody),
};

export const ClinicAPI = {
	//getClinicsByZip: (zip: string): Promise<ClinicType[]> => requests.get('https://npin.cdc.gov/api/organization/proximity?prox[origin]=' + zip),
	getBaseClinics: async () => await requests.get(`/search`),
	getClinicsByZip: async (zip: string) => await requests.get(`/search?zip=${zip}`),
	getAClinic: async (id: string) => await requests.get(`/test-centers/${id}`),
	//createPost: (post: PostType): Promise<PostType> =>
	//	requests.post('posts', post),
	//updatePost: (post: PostType, id: number): Promise<PostType> =>
	//	requests.put(`posts/${id}`, post),
	//deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};