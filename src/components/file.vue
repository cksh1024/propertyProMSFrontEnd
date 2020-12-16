<template>
    <div>
        <span v-for="(item, index) in rootDirectory" :key="item+index" class="overflow-hidden fl">
            <el-link v-text="item" class="rootFont fl" @click="skipDir(index)"></el-link><span class="separator fl">/</span>
        </span>
        <p class="overflow-hidden" style="width:100%;"><el-link class="lastDirFont fl" @click="returnLastDir">..</el-link></p>
        <p v-for="dir in directorys" :key="dir.dirName+dir.id" class="overflow-hidden" @mouseenter="dir.showDelBtn=!dir.showDelBtn" @mouseleave="dir.showDelBtn=!dir.showDelBtn">
            <i class="el-icon-folder fl"></i>
            <el-link v-text="dir.dirName" class="dirFont fl" @click="getFileList(dir.dirName)"></el-link>
            <el-button type="danger" icon="el-icon-delete" circle v-if="dir.showDelBtn" @click="open(dir.dirName, 'dir')"></el-button>
        </p>
        <p v-for="file in files" :key="file.fileName+file.id" class="overflow-hidden"  @mouseenter="file.showDelBtn=!file.showDelBtn" @mouseleave="file.showDelBtn=!file.showDelBtn">
            <i class="el-icon-document fl"></i>
            <el-link class="dirFont fl" v-text="file.fileName" @click="downLoad(file.fileName)"></el-link>
            <el-button type="danger" icon="el-icon-delete" circle v-if="file.showDelBtn"  @click="open(file.fileName, 'file')"></el-button>
        </p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import {Link} from 'element-ui'
export default {
    mounted () {
        this.getFileList('')
    },
    data () {
        return {
            rootDirectory: [],
            directorys: [],
            files: []
        }
    },
    methods: {
        getFileList(path) {
            let {rootDirectory} = this
            let realPath = ''
            for (let index in rootDirectory) {
                if (index != 0) realPath += rootDirectory[index] + '\\'
            }
            realPath += path
            let param = new FormData()
            param.append('path', realPath)
            axios.post('lclgl/getFileList', param)
            .then(res => {
                this.directorys = []
                for (let index in res.data.directorys) {
                    let directory = res.data.directorys[index]
                    let directorys = directory.split('\\')
                    let dir = {
                        'dirName': directorys[directorys.length-1],
                        'index': index,
                        'showDelBtn': false
                    }
                    this.directorys.push(dir)
                }

                this.rootDirectory = []
                let dirs = res.data.lastDirectory.split('\\')
                for (let index in dirs) {
                    if (dirs[index]) this.rootDirectory.push(dirs[index])
                }

                this.files = []
                for (let index in res.data.files) {
                    let file = res.data.files[index]
                    let fs = file.split("\\")
                    let f = {
                        fileName: fs[fs.length-1],
                        id: index,
                        showDelBtn: false
                    }
                    this.files.push(f)
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        returnLastDir() {
            this.rootDirectory.pop()
            this.getFileList('')
        },
        skipDir(index) {
            this.rootDirectory = this.rootDirectory.filter((value, key) => key<=index)
            this.getFileList('')
        },
        downLoad(fileName) {
            let filePath = ''
            for (let index in this.rootDirectory) filePath += this.rootDirectory[index] + '/'
            filePath += fileName

            window.open(`http://localhost:8080/lclgl/downLoad?fileName=${fileName}&filePath=${filePath}`)

        },
        delFile(fileName, type) {
            let {rootDirectory} = this
            let realPath = ''
            for (let index in rootDirectory) {
                if (index != 0) realPath += rootDirectory[index] + '\\'
            }
            realPath += fileName
            let param = new FormData()
            param.append('path', realPath)
            axios.post('lclgl/delFile', param)
            .then(res => {
                if (res.data.status == -1) {
                    return this.$message.error(res.data.msg)
                }
                this.$message({
                    type: 'success',
                    message: res.data.msg
                })
                if (type == 'file') {
                    this.files = this.files.filter(item => item.fileName != fileName)
                } else {
                    this.directorys = this.directorys.filter(item => item.dirName != fileName)
                }
            })
            .catch(err => {
                this.$message.error('删除失败！')
            })
        },
        open(fileName, type) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(() => {
                this.delFile(fileName, type)
            })
            .catch((err) => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        }
    }
}
</script>

<style>
    .rootFont {
        font-size: 22px;
    }
    .dirFont {
        font-size: 15px;
    }
    .lastDirFont {
        font-size: 25px;
    }
    .separator {
        font-size: 22px;
        margin: 5px;
    }
    .fl {
        float: left;
    }
    .el-icon-folder {
        margin-right: 10px;
        position: relative;
        top: 2px;
    }
    .overflow-hidden {
        overflow: hidden;
    }
    .el-icon-document {
        margin-right: 10px;
        position: relative;
        top: 2px;
    }
</style>
