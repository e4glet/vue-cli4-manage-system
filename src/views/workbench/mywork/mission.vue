<template>
	<div class="warp-main">
		<el-row v-loading="loading" element-loading-text="拼命加载中">
			<el-col :span="24" class="toolbar">
				<el-form :inline="true" :model="filters">
					<el-form-item>
						<el-input
							v-model="filters.number"
							placeholder="请输入文件名称"
							auto-complete="off"
							@keyup.enter.native="handleSearch"
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" size="medium" v-on:click="handleSearch">查询</el-button>
					</el-form-item>
					<el-form-item class="pull-right">
						<el-button type="primary" size="medium" @click="showAddDialog" icon="el-icon-plus">新建文件</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<!--表格数据-->
			<el-col class="table-wrapper">
				<el-table :data="tableData" stripe style="width: 100%" @row-click="handleDetail">
					<el-table-column prop="dId" v-if="idShow" label="文件ID"></el-table-column>
					<el-table-column prop="dNumber" label="文件版本" sortable></el-table-column>
					<el-table-column prop="dname" label="文件名称"></el-table-column>
					<el-table-column prop="eRemark" label="备注" show-overflow-tooltip></el-table-column>
					<el-table-column prop="createTime" :formatter="dateFormatter" label="创建日期"></el-table-column>
					<el-table-column prop="updateTime" :formatter="activeTateFormatter" label="更新日期"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
								type="text"
								icon="el-icon-delete"
								class="red"
								@click="handleDelete(scope.$index, scope.row)"
							>删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col :span="24" class="toolbar">
				<el-pagination
					background
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="currentPage"
					:page-sizes="[10, 50, 100, 200]"
					:page-size="pageSize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="total"
				></el-pagination>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
	name: "mission",
	data: function() {
		return {
			loading: false,
			idShow: false,
			total: 2,
			currentPage: 1,
			pageSize: 10,
			tableData: [
				{
					dId: 1,
					dNumber: "20200720002",
					dname: "XX文档",
					eRemark: "无",
					createTime: "2020-07-20",
					updateTime: "2020-07-20"
				},
				{
					dId: 2,
					dNumber: "20200720002",
					dname: "XX文档",
					eRemark: "无",
					createTime: "2020-07-20",
					updateTime: "2020-07-20"
				}
			],
			addVisible: false, // 添加弹窗flag
			detailVisible: false, // 详情弹窗flag
			maskVisible: false, // 弹窗mask显示
			detailId: 0, // 详情ID
			filters: {
				// 搜索表单
				number: ""
			}
		};
	},
	components: {},
	methods: {
		// 搜索
		handleSearch() {
			console.info(this.filters.number);
		},
		// 详情
		handleDetail(row, event, column) {
			this.detailId = row.mId;
			this.maskVisible = true;
			this.detailVisible = true;
		},
		// 删除
		handleDelete(index, row) {
			console.log(index, row);
		},
		// 选择每页显示条数
		handleSizeChange(val) {
			//        this.pageSize = val;
			//        this.currentPage = 1;
		},
		// 跳转页
		handleCurrentChange(val) {
			//        this.currentPage = val;
		},
		// 添加弹窗
		showAddDialog() {
			this.addVisible = true;
		},
		// 关闭所有弹窗
		cancelVisible() {
			this.maskVisible = false;
			this.detailVisible = false;
		},
		// 创建日期转换
		dateFormatter(row, column) {
			return this.getDateValue(row.createTime);
		},
		// 执行日期转换
		activeTateFormatter(row, column) {
			return this.getDateValue(row.updateTime);
		},
		// 获取日期
		getDateValue(datetime) {
			if (datetime) {
				datetime = new Date(datetime);
				let y = datetime.getFullYear() + "-";
				let mon = datetime.getMonth() + 1 + "-";
				let d = datetime.getDate();
				return y + mon + d;
			}
			return "";
		}
	}
};
</script>
<style scoped>
.detail-box {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 500px;
	height: 100%;
	overflow-y: auto;
	z-index: 2000;
	background-color: #fff;
}
.modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background-color: #000;
	opacity: 0.3;
}
</style>
