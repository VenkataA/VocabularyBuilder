import lessonData from "/data/data.js"

  export default {
    name: "quiz",
    mounted(){
        //Get the Lesson Number
        this.lessonNum=this.$route.params.lessonNum; 
    },
    //template: homeComponentTemplate
    template: '#quiz',
    data() {
      return {
        //lessons: lessonData,
        lessonNum: ""
      }
    }
  }