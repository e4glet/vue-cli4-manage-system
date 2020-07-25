<template>
  <div class="list-content">
    <h3>预览文件</h3>
    <ul>
      <li><span>文件版本:</span><div>{{detail.dNum}}</div></li>
      <li><span>文件名称:</span><div>{{detail.dname}}</div></li>
      <li><span>文件内容:</span><div>{{detail.content}}</div></li>
      <li><span>创建时间:</span><div>{{detail.createTime}}</div></li>
      <li><span>更新时间:</span><div>{{detail.updateTime}}</div></li>
      <li><span>备注:</span><div>{{detail.remark}}</div></li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      detail: {// 详情
        type: Object,
        default: null
      }
    },
    data() {
      return {
        loading: false,
      }
    },
    methods: {}
  }
</script>
<style  scoped>
  
   list-content h3 {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }

   list-content ul {
      padding: 10px;
      
    }

    li {
        position: relative;
        line-height: 40px;
        min-height: 40px;
        
      }

      span {
          position: absolute;
          left: 0;
          display: inline-block;
          width: 90px;
          color: #999;
        }
      div {
          margin-left: 90px;
        }
  
</style>
