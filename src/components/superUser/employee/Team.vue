<template>
<div>
    <el-button type="primary" round @click="dialogFormVisible = true">添加团队</el-button>
    <el-table
    :data="team"
    stripe
    height="750"
    style="width: 100%">
    <el-table-column
      prop="teamId"
      label="团队ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="teamName"
      label="团队名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="teamType"
      label="团队类型"
      :filters="[{ text: '建模团队', value: '建模团队' }, { text: '渲染团队', value: '渲染团队' },{ text: '后期团队', value: '后期团队' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      width="300">
    </el-table-column>
    <el-table-column
      prop="teamManagers"
      label="主管姓名">
    </el-table-column>
  </el-table>

  <el-dialog title="添加团队" :visible.sync="dialogFormVisible" >
  <el-form>
    <el-form-item label="团队名称" :label-width="formLabelWidth">
      <el-input v-model="teamName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="团队类型" :label-width="formLabelWidth">
      <el-select v-model="teamType" placeholder="选择团队类型">
        <el-option :label="item" :value="item" v-for="item in teamTypes" :key="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="主管" :label-width="formLabelWidth">
      <el-select v-model="managerId" placeholder="选择主管">
        <el-option :label="item.staffName" :value="item.userId" v-for="item in managers" :key="item.userId"></el-option>
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
import axios from 'axios'
export default {
  data () {
    return {
      team: [],
      dialogFormVisible: false,
      teamName: '',
      teamType: '',
      formLabelWidth: '120px',
      teamTypes: ['建模团队', '渲染团队', '后期团队'],
      managers: [],
      managerId: ''
    }
  },
  mounted () {
    this.getTeamInfos()
  },
  methods: {
    getTeamInfos () {
      axios.post('lclgl/getTeamInfos')
      .then(res => {
        this.team = res.data.teamInfos
      })
      .catch(err => {
        console.log(err)
      })
    },
    addteam () {
      if (this.teamName === '' || this.teamType === '' || this.managerId === '') {
        this.$message('信息未完善')
      } else {
        let params = new FormData()
        params.append('teamName', this.teamName)
        params.append('teamType', this.teamType)
        params.append('managerId', this.managerId)
        axios.post('lclgl/addTeam', params)
        .then(res => {
          this.getTeamInfos()
        })
        .catch(err => {
          console.log(err)
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
      return row.teamType === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  },
  watch: {
    teamType: function (value) {
      let params = new FormData()
      params.append('teamType', value)
      axios.post('lclgl/getManagersByTeamType', params)
      .then(res => {
        this.managers = res.data.managers
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
