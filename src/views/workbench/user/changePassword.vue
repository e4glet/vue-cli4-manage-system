<template>
	<div>
		<div class="container">
			<el-row>
				<el-col :span="12">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="原密码">
							<el-input v-model="form.oldpasspwd"></el-input>
						</el-form-item>
						<el-form-item label="新密码">
							<el-input v-model="form.newpasspwd"></el-input>
						</el-form-item>
						<el-form-item label="重复新密码">
							<el-input v-model="form.repasspwd"></el-input>
						</el-form-item>
						<el-button type="primary" @click="onSubmit">修改密码</el-button>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			form: {
				name: "changepwd",
				oldpasspwd: "",
				newpasspwd: "",
				repasspwd: ""
			}
		};
	},
	methods: {
		onSubmit() {
			console.log("submit!");
		}
	}
};
</script>
<style scoped>
.container {
	position: relative;
	padding: 30px;
	background: #fff;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-top: 15px;
	text-align: left;
}
</style>

