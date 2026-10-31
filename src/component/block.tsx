import React from "react";
{
	/* <template>
    <div class="block">
        <slot></slot>
    </div>
</template>
<style>

.block {
	background-color: #aaaa;
	padding: 20px;
}
</style> */
}
export default function ({ children }) {
	return <div className="block">{children}</div>;
}
