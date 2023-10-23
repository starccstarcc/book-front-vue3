import { ApiService } from "./api";

export default {
	/*getUploadedImages: (id: string) => {
		return ApiService.get(`/books/upload/${id}`);
	},*/

	uploadImage: (data: object, headers: any) => {
		return ApiService.post(`/books/upload`, data, headers);
	},

	removeUploaedImage: (id: string) => {
		return ApiService.delete(`/book/upload/${id}`);
	},
};
