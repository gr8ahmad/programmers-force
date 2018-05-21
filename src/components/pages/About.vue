<template>
   <div class="container">
   <div class="row">
       <div class="col-sm-12">
   <h1>Our Story</h1>
   <p>The story of Programmers Force began in 2016. It is co-founded by Mr. SM Khurram and Mr. Arslan Hanif They witnessed a result of a gap in Quality Services seen in system and development sector. In the beginning, a lack of service focused providers was realised. The company sought after building a trusted business advisory and software house with growth potential. Since then, Programmers Force has taken the lead in working with various Enterprises and SMEs across industries. From FinTech to Software Development, the company is committed to ensure highest degree of client satisfaction and becoming the cornerstone in IT. From its inception, Programmers Force has always approached the issues faced by business in a smart way. Our products meet the industry standards by incorporating both AI &amp; HI. The range of applications we have developed over the short period of time shows the depth of expertise and excellence. We not only help create but also allow clients to transform their approach and take their business to the next step.</p>           
       </div>
   </div>
   <div class="row team">
      <div class="col-sm-12 text-center">
          <h1 class="team-title">Our Team</h1>
      </div>
       <div class="col-xs-12 col-sm-6 col-md-4 text-center col-team" v-for="member in pfTeam">
           <img :src="member.imgPath" alt="" class="img-fluid rounded">
           <h4>{{member.name}}</h4>
           <h6>{{member.title}}</h6>
       </div>
   </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pfTeam: []    
        }
    },
    created() {
        this.pfTeam = this.$store.getters.getTeam;
    }
}
</script>

<style scoped>
    .team img {
        max-width: 280px;
        min-height: 308px;
        margin-bottom: 10px;
    }
    .col-team,.team-title {
        margin-bottom: 30px;
    }
</style>