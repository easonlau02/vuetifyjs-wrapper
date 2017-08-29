<template>
  <div style="width: 100%;">
  <v-card>
    <v-card-title flat>
      Students List
      <v-dialog v-model="formVisibility" width="60%">
        <v-btn fab dark class="indigo" slot="activator">
          <v-icon>add</v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">添加学生</span>
          </v-card-title>
          <v-card-text>
            <v-text-field label="姓名" required v-model="studentForms.name"></v-text-field>
            <v-select
              label="年龄"
              required
              :items="['0-17', '18-29', '30-54', '54+']"
              v-model="studentForms.age"
            ></v-select>
            <v-text-field label="联系电话" required v-model="studentForms.phone"></v-text-field>
            <v-text-field label="住址" required v-model="studentForms.address"></v-text-field>
            <v-select
              label="学生类别"
              autocomplete
              chips
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              v-model="studentForms.category"
            ></v-select>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">取消</v-btn>
            <v-btn class="blue--text darken-1" flat @click.native="dialog = false">保存</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table v-bind:headers="headers" v-bind:items="items" v-bind:search="search" v-bind:pagination.sync="pagination" hide-actions>
      <template slot="items" scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.age }}</td>
        <td class="text-xs-left">{{ props.item.phone }}</td>
        <td class="text-xs-left">{{ props.item.address }}</td>
        <td class="text-xs-left">{{ props.item.category }}</td>
        <td class="text-xs-left">
          <template scope="scope">
            <v-btn ></v-btn>
          </template>
        </td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </v-card>

  <!-- Add students dialog-->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        studentForms: {
          name: '',
          age: '',
          category: '',
          address: '',
          phone: ''
        },
        checkbox: false,
        formVisibility: false,
        search: '',
        pagination: {
          rowsPerPage: 8
        },
        headers: [
          { text: '姓名', value: 'name', align: 'left' },
          { text: '年龄', value: 'age', align: 'left' },
          { text: '联系电话', value: 'phone', align: 'left' },
          { text: '住址', value: 'address', align: 'left' },
          { text: '学生类别', value: 'category', align: 'left' }
        ],
        items: [
          {
            value: false,
            name: '郑雅琦',
            age: '11',
            category: '屋企',
            address: '唐家湾',
            phone: '123141421'
          },
          {
            value: false,
            name: '杨晨誉',
            age: '12',
            category: '琴行',
            address: '斗门',
            phone: '123141'
          },
          {
            value: false,
            name: '周靖一',
            age: '12',
            category: '星海音乐学院',
            address: '南屏',
            phone: '1231241'
          },
          {
            value: false,
            name: '郑子怡',
            age: '11',
            category: '琴行',
            address: '兰埔',
            phone: '1231244'
          },
          {
            value: false,
            name: '桂喆',
            age: '5',
            category: '星海音乐学院',
            address: '拱北',
            phone: '23234324'
          },
          {
            value: false,
            name: '梁晓明',
            age: '4',
            category: '琴行',
            address: '吉大',
            phone: '12312321'
          },
          {
            value: false,
            name: '詹昊成',
            age: '8',
            category: '星海音乐学院',
            address: '唐家湾',
            phone: '231234324'
          },
          {
            value: false,
            name: '詹昊明',
            age: '2',
            category: '琴行',
            address: '金湾区',
            phone: '3131313132'
          },
          {
            value: false,
            name: '健宁',
            age: '5',
            category: '星海音乐学院',
            address: '香洲区',
            phone: '131312313'
          }
        ]
      }
    },
    methods: {
      handleClick: function () {
        this.formVisibility = true
      },
      handleChkBoxChange: function () {
        console.log('handleChkBoxChange')
      },
      handleChkBoxBlur: function () {
        console.log('handleChkBoxBlur')
      }
    },
    computed: {
      pages () {
        return this.pagination.rowsPerPage ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
