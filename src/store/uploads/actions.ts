import uploadService from "@/services/uploadService";

export default {
	async createUploadCover({ commit }: any, data: object) {
		await uploadService
			.uploadImage(data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				const uploadedImageId = res.data._id;
				//salva id da imagem na storage para que o formulário colete
				localStorage.setItem("image_id", uploadedImageId);

				commit("GET_UPLOADS", res.data);
			});
	},
};
