<template>
<div>
    <el-button type="primary" round @click="dialogFormVisible = true">添加团队</el-button>
    <el-table
    :data="team"
    stripe
    height="750"
    style="width: 100%">
    <el-table-column
      prop="team_id"
      label="团队ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="team_name"
      label="团队名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="team_type"
      label="团队类型"
      :filters="[{ text: '建模团队', value: '建模团队' }, { text: '渲染团队', value: '渲染团队' },{ text: '后期团队', value: '后期团队' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      width="300">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="主管姓名">
    </el-table-column>
  </el-table>  

  <el-dialog title="添加团队" :visible.sync="dialogFormVisible" >
  <el-form :model="form">
    <el-form-item label="团队ID" :label-width="formLabelWidth">
      <el-input v-model="form.id" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="团队名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="团队类型" :label-width="formLabelWidth">
      <el-select v-model="form.type" placeholder="选择团队类型">
        <el-option label="建模团队" value="建模团队"></el-option>
        <el-option label="渲染团队" value="渲染团队"></el-option>
        <el-option label="后期团队" value="后期团队"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false;addteam()">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>

<script>
export default {
  data () {
    return {
      team: [{
        team_id: 201,
        team_name: '团队1',
        team_type: '建模团队',
        user_name: '王伟'
      }, {
        team_id: 202,
        team_name: '团队2',
        team_type: '渲染团队',
        user_name: '张三'
      }, {
        team_id: 203,
        team_name: '团队3',
        team_type: '后期团队',
        user_name: '李四'
      }],
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    addteam () {
      if (this.form.id === '' || this.form.name === '' || this.form.type === '') {
        this.$message('信息未完善')
      } else {
        this.team.push({
          team_id: this.form.id,
          team_name: this.form.name,
          team_type: this.form.type
        })
      }
    },
    resetDateFilter () {
        this.$refs.filterTable.clearFilter('date')
      },
      clearFilter () {
        this.$refs.filterTable.clearFilter()
      },
      formatter (row, column) {
        return row.address
      },
      filterTag (value, row) {
        return row.team_type === value
      },
      filterHandler (value, row, column) {
        const property = column['property']
        return row[property] === value
      }
    }
}
</script>

<style>

</style>
