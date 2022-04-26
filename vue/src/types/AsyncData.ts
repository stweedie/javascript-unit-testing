export type AsyncData<T> = {
	data: T | null;
	isLoading: boolean;
	error?: string | null;
}
