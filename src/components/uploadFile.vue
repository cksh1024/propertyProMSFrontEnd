<template>
    <div>
        <el-upload
            class="upload-demo"
            ref="upload"
            multiple
            :action="action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            fileList: [],
            action: 'http://localhost:8080/lclgl/upload'
            // action: 'http://localhost:8080/lclgl/mkpro/cksh'
        }
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
}
</script>

<style>

</style>