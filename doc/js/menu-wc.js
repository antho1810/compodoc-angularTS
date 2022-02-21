'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Mi documentacion</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/a-title.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' : 'data-target="#xs-additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' }>
                                                <span class="link-name">A TITLE</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' : 'id="xs-additional-page-e8a2ba1194ad2494a2d647ca59893ae413af3e3a53089bd6baebcba0ae2636de6cf489e2d9378d747adab58d8dd3d2a13614d5ed22213630e42c6eba84cabe32"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/a-title/a-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/a-title/a-1/a-1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 1.1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/a-title/a-1/a-1.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 1.2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/a-title/a-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">A 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/b-title.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' : 'data-target="#xs-additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' }>
                                                <span class="link-name">B TITLE</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' : 'id="xs-additional-page-3b3df5da6644d5a6353003c26de14defac9f900bc6b51db0899aae7db9d89164ef3283cc17e928a61cf8ae7df4bed0395bd2373688404cdad5ea8f5830b42d9f"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-3.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 3</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/b-title/b-4.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">B 4</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link" >AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-10b59de9bd4a4fd8d02aa4c4d770e1f22183f7cf47e9a300cc4436a4ac251f58aa9849041af1555f4985b42d07a1e275f4c65c6561374002ebdf96433b44b257"' : 'data-target="#xs-components-links-module-AboutModule-10b59de9bd4a4fd8d02aa4c4d770e1f22183f7cf47e9a300cc4436a4ac251f58aa9849041af1555f4985b42d07a1e275f4c65c6561374002ebdf96433b44b257"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-10b59de9bd4a4fd8d02aa4c4d770e1f22183f7cf47e9a300cc4436a4ac251f58aa9849041af1555f4985b42d07a1e275f4c65c6561374002ebdf96433b44b257"' :
                                            'id="xs-components-links-module-AboutModule-10b59de9bd4a4fd8d02aa4c4d770e1f22183f7cf47e9a300cc4436a4ac251f58aa9849041af1555f4985b42d07a1e275f4c65c6561374002ebdf96433b44b257"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutRoutingModule.html" data-type="entity-link" >AboutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b320d8500dd87cc9c0e47b532e8005e7a96d4f7b35bd76f5a4ac5ac4ff11e5be6b8889cd5b89c7fb8bfbe5fee6961ed638536e2124a6e0faa6321c745cc8fd72"' : 'data-target="#xs-components-links-module-AppModule-b320d8500dd87cc9c0e47b532e8005e7a96d4f7b35bd76f5a4ac5ac4ff11e5be6b8889cd5b89c7fb8bfbe5fee6961ed638536e2124a6e0faa6321c745cc8fd72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b320d8500dd87cc9c0e47b532e8005e7a96d4f7b35bd76f5a4ac5ac4ff11e5be6b8889cd5b89c7fb8bfbe5fee6961ed638536e2124a6e0faa6321c745cc8fd72"' :
                                            'id="xs-components-links-module-AppModule-b320d8500dd87cc9c0e47b532e8005e7a96d4f7b35bd76f5a4ac5ac4ff11e5be6b8889cd5b89c7fb8bfbe5fee6961ed638536e2124a6e0faa6321c745cc8fd72"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' : 'data-target="#xs-components-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' :
                                            'id="xs-components-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' : 'data-target="#xs-pipes-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' :
                                            'id="xs-pipes-links-module-ComponentsModule-cec216aec3c7eaa316a7819f48d3ade8f2f6c43d2f7299c802db1e1ae6f210f013462fc355cf41a36287d9052f7342f254a8280930fba820b959556c65089d21"' }>
                                            <li class="link">
                                                <a href="pipes/DomSecurePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DomSecurePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/YoutubePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YoutubePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-4b05c07dc225fb3485d1c3efa30b918f2075125c9ca2d8fda9c282b28579b131dc5fddbfde576e908482a7002761141b0887b6ae838a32388262bfaf1b0ba3a1"' : 'data-target="#xs-components-links-module-ContactModule-4b05c07dc225fb3485d1c3efa30b918f2075125c9ca2d8fda9c282b28579b131dc5fddbfde576e908482a7002761141b0887b6ae838a32388262bfaf1b0ba3a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-4b05c07dc225fb3485d1c3efa30b918f2075125c9ca2d8fda9c282b28579b131dc5fddbfde576e908482a7002761141b0887b6ae838a32388262bfaf1b0ba3a1"' :
                                            'id="xs-components-links-module-ContactModule-4b05c07dc225fb3485d1c3efa30b918f2075125c9ca2d8fda9c282b28579b131dc5fddbfde576e908482a7002761141b0887b6ae838a32388262bfaf1b0ba3a1"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesModule-0941afdf650ffd1fef1a4ec46c792320747485b2c8e3b39d737637eab2decb838fc080939e82e79de2e2b1e0af8d33716d17d2cf0c9e388942b01a173adc7ee5"' : 'data-target="#xs-components-links-module-CoursesModule-0941afdf650ffd1fef1a4ec46c792320747485b2c8e3b39d737637eab2decb838fc080939e82e79de2e2b1e0af8d33716d17d2cf0c9e388942b01a173adc7ee5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-0941afdf650ffd1fef1a4ec46c792320747485b2c8e3b39d737637eab2decb838fc080939e82e79de2e2b1e0af8d33716d17d2cf0c9e388942b01a173adc7ee5"' :
                                            'id="xs-components-links-module-CoursesModule-0941afdf650ffd1fef1a4ec46c792320747485b2c8e3b39d737637eab2decb838fc080939e82e79de2e2b1e0af8d33716d17d2cf0c9e388942b01a173adc7ee5"' }>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link" >CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-35bff188aa988d481ed5a050afbd94973d048031bf6fd77e88f240c72808fe09ed6841c7a0164d95b464738e4ef33b6ec706db7672c36e1c9b5613a30acc3b34"' : 'data-target="#xs-components-links-module-HomeModule-35bff188aa988d481ed5a050afbd94973d048031bf6fd77e88f240c72808fe09ed6841c7a0164d95b464738e4ef33b6ec706db7672c36e1c9b5613a30acc3b34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-35bff188aa988d481ed5a050afbd94973d048031bf6fd77e88f240c72808fe09ed6841c7a0164d95b464738e4ef33b6ec706db7672c36e1c9b5613a30acc3b34"' :
                                            'id="xs-components-links-module-HomeModule-35bff188aa988d481ed5a050afbd94973d048031bf6fd77e88f240c72808fe09ed6841c7a0164d95b464738e4ef33b6ec706db7672c36e1c9b5613a30acc3b34"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioModule.html" data-type="entity-link" >PortfolioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortfolioModule-8c7b542c3bf1be75a789635e757211c79603837689be95ad9acc5a274a937b372c85565ec0a905f0251c8b06464d99755d9d3156cdff88be4aa9ba4d04d7fe67"' : 'data-target="#xs-components-links-module-PortfolioModule-8c7b542c3bf1be75a789635e757211c79603837689be95ad9acc5a274a937b372c85565ec0a905f0251c8b06464d99755d9d3156cdff88be4aa9ba4d04d7fe67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortfolioModule-8c7b542c3bf1be75a789635e757211c79603837689be95ad9acc5a274a937b372c85565ec0a905f0251c8b06464d99755d9d3156cdff88be4aa9ba4d04d7fe67"' :
                                            'id="xs-components-links-module-PortfolioModule-8c7b542c3bf1be75a789635e757211c79603837689be95ad9acc5a274a937b372c85565ec0a905f0251c8b06464d99755d9d3156cdff88be4aa9ba4d04d7fe67"' }>
                                            <li class="link">
                                                <a href="components/PortfolioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortfolioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioRoutingModule.html" data-type="entity-link" >PortfolioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostModule-3e5e4ea64e3fbec5f469360047b7afdf24b4ec14c9f5331a4587b1f96f84432d07d00967de162d8b251064cf91553d0328c4ab409b89b49c16838d356569efcf"' : 'data-target="#xs-components-links-module-PostModule-3e5e4ea64e3fbec5f469360047b7afdf24b4ec14c9f5331a4587b1f96f84432d07d00967de162d8b251064cf91553d0328c4ab409b89b49c16838d356569efcf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-3e5e4ea64e3fbec5f469360047b7afdf24b4ec14c9f5331a4587b1f96f84432d07d00967de162d8b251064cf91553d0328c4ab409b89b49c16838d356569efcf"' :
                                            'id="xs-components-links-module-PostModule-3e5e4ea64e3fbec5f469360047b7afdf24b4ec14c9f5331a4587b1f96f84432d07d00967de162d8b251064cf91553d0328c4ab409b89b49c16838d356569efcf"' }>
                                            <li class="link">
                                                <a href="components/PostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-7a5559001c2512392642c188278c3ce630d5b9c27913248c8239e16c8c2bf9e6bc896cc481bea17cdfa18dc7a1e8ad45f9be6bf66d02a1be7144b153a67afb24"' : 'data-target="#xs-components-links-module-SidebarModule-7a5559001c2512392642c188278c3ce630d5b9c27913248c8239e16c8c2bf9e6bc896cc481bea17cdfa18dc7a1e8ad45f9be6bf66d02a1be7144b153a67afb24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-7a5559001c2512392642c188278c3ce630d5b9c27913248c8239e16c8c2bf9e6bc896cc481bea17cdfa18dc7a1e8ad45f9be6bf66d02a1be7144b153a67afb24"' :
                                            'id="xs-components-links-module-SidebarModule-7a5559001c2512392642c188278c3ce630d5b9c27913248c8239e16c8c2bf9e6bc896cc481bea17cdfa18dc7a1e8ad45f9be6bf66d02a1be7144b153a67afb24"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Anthony.html" data-type="entity-link" >Anthony</a>
                            </li>
                            <li class="link">
                                <a href="classes/Myclass.html" data-type="entity-link" class="deprecated-name">Myclass</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SharedElement.html" data-type="entity-link" >SharedElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});