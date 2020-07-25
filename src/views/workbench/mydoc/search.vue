<template>
  <div class="warp-main">
    <el-row v-loading="loading" element-loading-text="拼命加载中">
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="filters.keyword" placeholder="请输入文件名称搜索" auto-complete="off" @keyup.enter.native="handleSearch"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" v-on:click="handleSearch">查询</el-button>
          </el-form-item>
          <el-form-item class="pull-right">
            <el-button type="primary" size="small" icon="el-icon-plus" @click="addfile">新建文件</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--表格数据-->
      <el-col :span="24" class="table-wrapper">
        <el-table :data="infoData" stripe style="width: 100%" @row-click="planDetail">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="info-table-expand">
                <el-form-item label="计划编号：">
                  <span>{{props.row.dNum}}</span>
                </el-form-item>
                <el-form-item label="计划名称：">
                  <span>{{props.row.dname}}</span>
                </el-form-item>
                <el-form-item label="计划内容：">
                  <span>{{props.row.content}}</span>
                </el-form-item>
                <el-form-item label="开始时间：">
                  <span>{{props.row.createTime}}</span>
                </el-form-item>
                <el-form-item label="完成时间：">
                  <span>{{props.row.updateTime}}</span>
                </el-form-item>
                <el-form-item label="备注：">
                  <span>{{props.row.remark}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="文件名称" prop="dNum"></el-table-column>
          <el-table-column label="文件版本" prop="dname"></el-table-column>
           <el-table-column label="创建时间" prop="createTime"></el-table-column>
          <el-table-column label="更新时间" prop="updateTime"></el-table-column>
        </el-table>
      </el-col>
      <!--分页-->
      <el-col :span="24" class="toolbar">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage" :page-sizes="[10, 50, 100, 200]" :page-size="10"
                       layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-col>
    </el-row>
    <!--详情-->
    <div class="modal-mask" v-if="maskVisible" @click="cancelVisible"></div>
    <transition name="slide-fade">
      <div class="detail-box" v-if="detailVisible">
        <plan-detail ref="detailPlan" :detail="detail"></plan-detail>
      </div>
    </transition>
  </div>
</template>
<script>
  import PlanDetail from './detail'
  export default {
    name: 'plan',
    data (){
      return {
        loading: false, // 加载loading
        filters: { // 搜索表单
          keyword: ''
        },
        total: 5,
        currentPage: 1,
        pageSize: 10,
        infoData: [{
            id: 1,
            dNum: '20200720002',
            dname: 'XX管理文件',
            content: 'xx内容',
            createTime: '2020-07-20 08:00:00',
            updateTime: '2020-07-20 09:00:00',
            remark: '备注内容'
          },
          {
            id: 2,
            dNum: '20200720002',
            dname: 'XX管理文件',
            content: 'xx内容',
            createTime: '2020-07-20 08:00:00',
            updateTime: '2020-07-20 09:00:00',
            remark: '备注内容'
          },
          {
            id: 3,
           dNum: '20200720002',
            dname: 'XX管理文件',
            content: 'xx内容',
            createTime: '2020-07-20 08:00:00',
            updateTime: '2020-07-20 09:00:00',
            remark: '备注内容'
          }
          ],
        detailVisible: false, // 详情弹窗flag
        maskVisible: false, // 弹窗mask显示
        detail: null, // 详情ID
      }
    },
    components: {
      'plan-detail': PlanDetail
    },
    methods: {
      addfile() {
        this.$message({
          showClose: true,
          message: '这里可以跳转到创建文件页面',
          type: 'success'
        });
      },
      // 详情
      planDetail(row, event, column) {
        this.detail = row;
        this.maskVisible = true;
        this.detailVisible = true;
      },
      // 关闭详情弹窗
      cancelVisible() {
        this.maskVisible = false;
        this.detailVisible = false;
      },
      // search data
      handleSearch() {
        // ...
      },
      // 选择每页显示条数
      handleSizeChange(val){
//        this.pageSize = val;
//        this.currentPage = 1;
      },
      // 跳转页
      handleCurrentChange(val){
//        this.currentPage = val;
      },
    }
  }
</script>
<style>
  .info-table-expand {
    font-size: 0;
  }
  .info-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .info-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
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
    opacity: .3;
  }
</style>
