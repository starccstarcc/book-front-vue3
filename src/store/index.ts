import { createStore } from "vuex";
import userStore from "./users/user-store";
import bookStore from "./books/book-store";
import departmentStore from "./departments/department-store";
import employeeStore from "./employees/employee-store";
import authorStore from "./author/author-store";
import uploadStore from "./uploads/upload-store";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
	modules: {
		userStore,
		bookStore,
		departmentStore,
		employeeStore,
		authorStore,
		uploadStore,
	},
	plugins: [createPersistedState()],
});
