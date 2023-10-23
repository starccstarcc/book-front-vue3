export const truncate = (title: string): string => {
	return title.split(" ")
		.slice(0, 2)
		.toString()
		.replace(",", " ");
}
