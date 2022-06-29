import lessonData from "/data/data.js"

  export default {
    name: "home",
    //template: homeComponentTemplate
    template: '#home_template',
    data() {
      return {
        lessons: lessonData
      }
    }
  }