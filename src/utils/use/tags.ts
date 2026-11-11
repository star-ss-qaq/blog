import { Tag } from "@/database/tag";
import { useRequest } from "@thestarweb/star-framework-app-web-vue";
import { computed, ref, shallowRef } from "vue";

const tags = shallowRef<Pick<Tag, "id" | "name" | "pid">[]>([]);
const status = ref<'loading'|'error'|'success'>("loading");
const readOnlyTag = computed(() => ({tags:tags.value, status:status.value}));
let hasInit = false;

export function useTags() {
	const request = useRequest();
	if (!hasInit) {
		status.value = 'loading';
		request
			.get("self:/tag/all", {})
			.then((res) => {
				status.value='success'
				console.log(res);
				tags.value = res;
			})
			.catch(() => {
				hasInit = false
				status.value = 'error'
			});
		hasInit = true;
	}
	return readOnlyTag;
}
