<script>
export default {
  methods: {
  },
  created () {
    // this.getUserInfo()
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  margin: 0;
}

.active {
  color: red;
}

.vetically {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* this rule will be remove */

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
