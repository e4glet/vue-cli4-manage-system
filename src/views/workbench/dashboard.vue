<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height:252px;">
					<div class="user-info">
						<img src="../../assets/images/logo.png" class="user-avator" alt />
						<div class="user-info-cont">
							<div class="user-info-name">{{username}}</div>
							<div>{{rolename}}</div>
						</div>
					</div>
					<div class="user-info-list">
						上次登录时间：
						<span>2020-7-21</span>
					</div>
					<div class="user-info-list">
						上次登录地点：
						<span>天津</span>
					</div>
				</el-card>
			</el-col>
			<el-col :span="16">
				想不出来要加什么，等看到好的例子再加上
			</el-col>
		</el-row>
	</div>
</template>
<script>
// import bus from "@/components/nav/bus";
export default {
	name: "dashboard",
	data() {
		return {
			username: "",
			rolename: "",
			logintime: ""
		};
	},
	mounted() {
		let user = window.localStorage.getItem("Authorization");
		if (user) {
			user = JSON.parse(user);
			this.username = user.nickname || "";
			this.rolename = user.rolename || "";
		}
	},
	methods: {}
};
</script>
<style scope>
.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}
.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}
.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}
.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}
.user-info-list span {
    margin-left: 70px;
}
.mgb20 {
    margin-bottom: 20px;
}
</style>

