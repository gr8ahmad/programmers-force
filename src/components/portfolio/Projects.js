export const Projects = {

    projects: [{
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
                ],
    getProjects() {
        return this.projects.slice();
    },
    getProject(index) {
        return this.projects[index];
    }
}
