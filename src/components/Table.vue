<template>
  <div>
    <h1>封装表格业务组件（复用代码）</h1>
    <!-- 表格相关操作按钮 -->
    <el-card shadow="never" class="card">
    </el-card>
    <!-- 表格 -->
    <el-card shadow="never" class="card">
      <el-table :data="data">
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="#"></el-table-column>

        <el-table-column
          v-for="(col) in columns"
          :key="col.key"
          :label="col.title || col.key" 
          :prop="col.key"
          :width="col.width">
          
        </el-table-column>

        <el-table-column 
          label="操作">
          <template v-slot="{row}">
            <el-button type='text'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页 -->
    <el-card shadow="never">
      <el-pagination
        layout="prev, pager, next"
        :current-page="currentPage"
        :total="total"
        @current-change="currentChange">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    // 列数据
    columns: Array,
    data: Array,
    total: {
      type: Number,
      default: 0
    },
    currentPage: Number
  },

  methods: {
    currentChange (page) {
      this.$emit('current-change', page)
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>