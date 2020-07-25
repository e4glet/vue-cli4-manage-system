<template>
	<div class="container">
		<el-row class="top-panel row-list">
			<el-col :span="18">
				<h1>新建表单</h1>
			</el-col>
			<el-col :span="6" class='btn-panel'>
				<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
			</el-col>
		</el-row>
		<el-row class="row-list">
			<el-col :span="24">
				<el-input v-model="title" placeholder="请输入标题"></el-input>
			</el-col>
		</el-row>
		<el-row class="row-list">
			<el-col :span="24">
				<mavon-editor
					v-model="content"
					ref="md"
					@imgAdd="$imgAdd"
					@change="change"
					style="min-height: 600px"
				/>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12" class='btn-panel'>
				<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
	data() {
		return {
			title: "",
			content: "",
			html: ""
		};
	},
	components: {
		mavonEditor
	},
	methods: {
		// 将图片上传到服务器，返回地址替换到md中
		$imgAdd(pos, $file) {
			var formdata = new FormData();
			formdata.append("file", $file);
			// 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
			this.$axios({
				url: "/common/upload",
				method: "post",
				data: formdata,
				headers: { "Content-Type": "multipart/form-data" }
			}).then(url => {
				this.$refs.md.$img2Url(pos, url);
			});
		},
		change(value, render) {
			// render 为 markdown 解析后的结果
			this.html = render;
		},
		submit() {
			console.log(this.content);
			console.log(this.html);
			this.$message.success("提交成功！");
		}
	}
};
</script>
<style scoped>
.container {
	position: relative;
	padding: 30px;
	background: #fff;
	border-radius: 5px;
	text-align: left;
}

.top-panel {
	height: 50px;
	line-height: 50px;
	text-align: center;
}

.row-list {
	margin-bottom: 20px;
}

.btn-panel{
    text-align: right;
}
</style>