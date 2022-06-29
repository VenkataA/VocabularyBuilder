import lessonData from "/data/data.js"

  export default {
    name: "lesson",
    mounted(){
        //Get the Lesson Number
        this.lessonNum=this.$route.params.lessonNum; 
        
        //Look for the lesson - incase the array is out of order
        let lessonObject = lessonData.find(obj => obj.lessonNum == this.lessonNum);
        this.youtubeEmbed=lessonObject.youtubeEmded;
    },
    //template: homeComponentTemplate
    template: '#lesson_template',
    data() {
      return {
        //lessons: lessonData,
        lessonNum: "",
        youtubeEmbed: ""
      }
    }
  }