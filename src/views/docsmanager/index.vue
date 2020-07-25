<template>
  <div class="warp-main">
    <el-row :span="24" v-loading="loading" element-loading-text="拼命加载中">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0;">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="请输入查询文档名称" auto-complete="off" @keyup.enter.native="fetchData"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" v-on:click="fetchData">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table ref="multipleTable" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="dName" label="文档名称" width="180" sortable></el-table-column>
        <el-table-column prop="dNumber" label="文档版本" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column prop="dclassify" label="文档分类" width="180"></el-table-column>
        <el-table-column prop="creator" label="创建人" width="180"></el-table-column>
        <el-table-column prop="createTime" label="创建日期" width="180"></el-table-column>
        <el-table-column prop="updateTime" label="更新日期" width="180"></el-table-column>
        <el-table-column prop="recordStatus" label="文档状态" width="180"></el-table-column>
      </el-table>
     
      <el-col :span="24" class="toolbar">
        <el-pagination background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 50, 100, 200]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  
  export default {
    data() {
      return {
        loading: false,
        keyword: "文档名称",
        total: 5,
        currentPage: 1,
        pageSize: 10,
        tableData: [{
          dNumber: '20200721001',
          dName: '工控机00101文档',
          dclassify: '工控机',
          creator: '张建国',
          createTime: '2020-07-20',
          updateTime: '2020-07-21',
          recordStatus: '1'
        }],
        multipleSelection: [],
        filters: {
          name: ''
        }
      }
    },
    created: function(){
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      //this.fetchData();  //调用接口获取动态数据

    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(function(row) {
            this.$refs.multipleTable.toggleRowSelection(row);
        });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },// 使用async await进行异步处理
      async fetchData(){ //获取数据
        let that = this;
        let params = {
          curr: that.currentPage,
          pageSize: that.pageSize,
          keywords: that.filters.name
        };
        that.loading = true;
        // 使用async await进行异步处理
        var result = await this.$http.post('icdMangerSystem/requestPost',{username:this.User.username,password:this.User.password});
        
        that.loading = false;
        that.total = result.count;
        that.currentPage = result.curr;
        that.tableData = result.data;
        
      },
      handleSizeChange(val){
        this.pageSize = val;
        this.currentPage = 1;
        this.fetchData();
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val){
        this.currentPage = val;
        this.fetchData();
//        console.log(`当前页: ${val}`);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style>
  .el-table th {
    text-align: center;
  }

  .el-table tbody tr td:first-child {
    text-align: center;
  }
</style>
