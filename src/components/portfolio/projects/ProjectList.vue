<template>
<div>
   <b-container class="bv-example-row">
    <b-row>
        <b-col v-for="(project, index ) in pfProjects">
        <Project :name="project.projectName"
        :imagePath="project.projectImagePath"
        :description="project.projectDescription"
        :id="index"/>
        </b-col>
    </b-row>
    
</b-container>
</div>
</template>

<script>
    import Project from './Project.vue';
    export default {
        data() {
            return {
                pfProjects: [{
                        projectName: 'BuySellCrypto',
                        projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/02/buysellcrypto-portfolio.png',
                        projectUrl: '#',
                        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    },
                    {
                        projectName: 'StafTimer',
                        projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/01/portfolio-staff-timer.png',
                        projectUrl: '#',
                        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    },
                    {
                        projectName: 'Shuftipro',
                        projectImagePath: 'https://pf.com.pk/wp-content/uploads/2018/01/portfolio-shuftipro.png',
                        projectUrl: '#',
                        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsam magni blanditiis unde illum magnam expedita, quisquam velit animi ipsum est atque voluptatum, adipisci consequuntur deserunt, porro officiis voluptatem quibusdam.'
                    }
                ]

            }
        },
        components: {
            Project
        }
    }

</script>

<style></style>
