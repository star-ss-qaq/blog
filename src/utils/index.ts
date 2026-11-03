import type { Tag } from "@/database/types";

export function getTagUrl(tag: Tag) {
	if (tag.eName) {
		return `/tag/name/${tag.eName}/1`;
	}
	return `/tag/id/${tag.id}/1`;
}
