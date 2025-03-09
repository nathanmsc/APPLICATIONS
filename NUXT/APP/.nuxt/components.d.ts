
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CarouselComponent': typeof import("../components/carousel-component.vue")['default']
    'ContentHome': typeof import("../components/content-home.vue")['default']
    'ContentIndex': typeof import("../components/content-index.vue")['default']
    'FooterComponent': typeof import("../components/footer-component.vue")['default']
    'Jumbotron': typeof import("../components/jumbotron.vue")['default']
    'NavbarComponent': typeof import("../components/navbar-component.vue")['default']
    'BInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/Input")['default']
    'BBlock': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/block")['default']
    'BBlockquote': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquote")['default']
    'BBlockquoteFigure': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFigure")['default']
    'BBlockquoteFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFooter")['default']
    'BDefinitionDescription': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']
    'BDefinitionList': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']
    'BDefinitionTerm': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']
    'BDiv': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/div")['default']
    'BFigure': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figure")['default']
    'BFigureCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureCaption")['default']
    'BFigureImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureImage")['default']
    'BFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/footer")['default']
    'BColFormLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLabel")['default']
    'BColFormLegend': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLegend")['default']
    'BDatalist': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/datalist")['default']
    'BFieldset': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/fieldset")['default']
    'BForm': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/form")['default']
    'BFormCheck': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheck")['default']
    'BFormCheckInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckInput")['default']
    'BFormCheckLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckLabel")['default']
    'BFormColor': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formColor")['default']
    'BFormControl': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formControl")['default']
    'BFormFile': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFile")['default']
    'BFormFloating': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFloating")['default']
    'BFormInput': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formInput")['default']
    'BFormLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formLabel")['default']
    'BFormRange': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formRange")['default']
    'BFormSelect': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSelect")['default']
    'BFormSwitch': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSwitch")['default']
    'BFormText': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formText")['default']
    'BFormTextarea': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formTextarea")['default']
    'BInputGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroup")['default']
    'BInputGroupText': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroupText")['default']
    'BLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/label")['default']
    'BLegend': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/legend")['default']
    'BOption': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/option")['default']
    'BValidFeedback': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validFeedback")['default']
    'BValidTooltip': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validTooltip")['default']
    'BHr': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/hr")['default']
    'BImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']
    'BList': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
    'BListItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
    'BMain': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/main")['default']
    'BParagraph': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']
    'BPicture': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/picture")['default']
    'BAnchor': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']
    'BButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/button")['default']
    'BH1': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h1")['default']
    'BH2': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h2")['default']
    'BH3': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h3")['default']
    'BH4': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h4")['default']
    'BH5': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h5")['default']
    'BH6': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h6")['default']
    'BHeadings': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']
    'BInline': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']
    'BSmall': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/small")['default']
    'BStrong': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/strong")['default']
    'BCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/caption")['default']
    'BTable': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/table")['default']
    'BTbody': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tbody")['default']
    'BTd': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/td")['default']
    'BTfoot': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tfoot")['default']
    'BTh': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/th")['default']
    'BThead': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/thead")['default']
    'BTr': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tr")['default']
    'Accordion': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordion")['default']
    'AccordionBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionBody")['default']
    'AccordionButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionButton")['default']
    'AccordionCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionCollapse")['default']
    'AccordionHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionHeader")['default']
    'AccordionItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionItem")['default']
    'Alert': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alert")['default']
    'AlertHeading': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertHeading")['default']
    'AlertLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertLink")['default']
    'Backdrop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/backdrop")['default']
    'Badge': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/badge")['default']
    'Breadcrumb': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumb")['default']
    'BreadcrumbItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumbItem")['default']
    'ButtonGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonGroup")['default']
    'ButtonToolbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonToolbar")['default']
    'CheckboxToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/checkboxToggleButton")['default']
    'CloseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/closeButton")['default']
    'RadioToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/radioToggleButton")['default']
    'Card': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/card")['default']
    'CardBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardBody")['default']
    'CardFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardFooter")['default']
    'CardGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardGroup")['default']
    'CardHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardHeader")['default']
    'CardImg': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImg")['default']
    'CardImgBottom': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgBottom")['default']
    'CardImgOverlay': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgOverlay")['default']
    'CardImgTop': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgTop")['default']
    'CardLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardLink")['default']
    'CardSubTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardSubTitle")['default']
    'CardText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardText")['default']
    'CardTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardTitle")['default']
    'Carousel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carousel")['default']
    'CarouselCaption': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselCaption")['default']
    'CarouselControl': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselControl")['default']
    'CarouselIndicators': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicators")['default']
    'CarouselIndicatorsButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicatorsButton")['default']
    'CarouselInner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselInner")['default']
    'CarouselItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItem")['default']
    'CarouselItemImage': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItemImage")['default']
    'Collapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapse")['default']
    'CollapseButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapseButton")['default']
    'Grid': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/grid")['default']
    'GridCol': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/gridCol")['default']
    'Dropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdown")['default']
    'DropdownItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItem")['default']
    'DropdownItemDivider': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemDivider")['default']
    'DropdownItemText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemText")['default']
    'DropdownMenu': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownMenu")['default']
    'DropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggle")['default']
    'DropdownToggleSplit': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggleSplit")['default']
    'Col': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/col")['default']
    'Container': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/container")['default']
    'Row': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/row")['default']
    'IconLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/iconLink/iconLink")['default']
    'ListGroup': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroup")['default']
    'ListGroupItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItem")['default']
    'ListGroupItemAction': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemAction")['default']
    'ListGroupItemLabel': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemLabel")['default']
    'ListGroupList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupList")['default']
    'Modal': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modal")['default']
    'ModalBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalBody")['default']
    'ModalContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalContent")['default']
    'ModalDialog': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalDialog")['default']
    'ModalFooter': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalFooter")['default']
    'ModalHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalHeader")['default']
    'ModalTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalTitle")['default']
    'ModalToggleButton': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalToggleButton")['default']
    'Nav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/nav")['default']
    'NavItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItem")['default']
    'NavItemDropdown': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdown")['default']
    'NavItemDropdownToggle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdownToggle")['default']
    'NavLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navLink")['default']
    'NavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navList")['default']
    'TabContent': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabContent")['default']
    'TabPane': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabPane")['default']
    'Navbar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbar")['default']
    'NavbarBrand': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarBrand")['default']
    'NavbarCollapse': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarCollapse")['default']
    'NavbarNav': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNav")['default']
    'NavbarNavList': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNavList")['default']
    'NavbarText': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarText")['default']
    'NavbarToggler': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarToggler")['default']
    'Offcanvas': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvas")['default']
    'OffcanvasBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasBody")['default']
    'OffcanvasHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasHeader")['default']
    'OffcanvasTitle': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasTitle")['default']
    'PageItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageItem")['default']
    'PageLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageLink")['default']
    'Pagination': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pagination")['default']
    'Progress': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progress")['default']
    'ProgressBar': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progressBar")['default']
    'Spinner': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/spinner")['default']
    'Toast': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toast")['default']
    'ToastBody': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastBody")['default']
    'ToastContainer': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastContainer")['default']
    'ToastHeader': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastHeader")['default']
    'VerticalRule': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'IconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'BP': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']
    'BH': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']
    'BA': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']
    'BSpan': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']
    'BImg': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']
    'BDd': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']
    'BDt': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']
    'BDl': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']
    'BUl': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
    'BLi': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
    'Vr': typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']
    'List': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
    'ListItem': typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
    'BLink': typeof import("../node_modules/usebootstrap/dist/runtime/components/nuxt/bslink")['default']
    'BIcon': typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/icon")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCarouselComponent': LazyComponent<typeof import("../components/carousel-component.vue")['default']>
    'LazyContentHome': LazyComponent<typeof import("../components/content-home.vue")['default']>
    'LazyContentIndex': LazyComponent<typeof import("../components/content-index.vue")['default']>
    'LazyFooterComponent': LazyComponent<typeof import("../components/footer-component.vue")['default']>
    'LazyJumbotron': LazyComponent<typeof import("../components/jumbotron.vue")['default']>
    'LazyNavbarComponent': LazyComponent<typeof import("../components/navbar-component.vue")['default']>
    'LazyBInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/Input")['default']>
    'LazyBBlock': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/block")['default']>
    'LazyBBlockquote': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquote")['default']>
    'LazyBBlockquoteFigure': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFigure")['default']>
    'LazyBBlockquoteFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFooter")['default']>
    'LazyBDefinitionDescription': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']>
    'LazyBDefinitionList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']>
    'LazyBDefinitionTerm': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']>
    'LazyBDiv': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/div")['default']>
    'LazyBFigure': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figure")['default']>
    'LazyBFigureCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureCaption")['default']>
    'LazyBFigureImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureImage")['default']>
    'LazyBFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/footer")['default']>
    'LazyBColFormLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLabel")['default']>
    'LazyBColFormLegend': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLegend")['default']>
    'LazyBDatalist': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/datalist")['default']>
    'LazyBFieldset': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/fieldset")['default']>
    'LazyBForm': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/form")['default']>
    'LazyBFormCheck': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheck")['default']>
    'LazyBFormCheckInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckInput")['default']>
    'LazyBFormCheckLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckLabel")['default']>
    'LazyBFormColor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formColor")['default']>
    'LazyBFormControl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formControl")['default']>
    'LazyBFormFile': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFile")['default']>
    'LazyBFormFloating': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFloating")['default']>
    'LazyBFormInput': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formInput")['default']>
    'LazyBFormLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formLabel")['default']>
    'LazyBFormRange': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formRange")['default']>
    'LazyBFormSelect': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSelect")['default']>
    'LazyBFormSwitch': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSwitch")['default']>
    'LazyBFormText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formText")['default']>
    'LazyBFormTextarea': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formTextarea")['default']>
    'LazyBInputGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroup")['default']>
    'LazyBInputGroupText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroupText")['default']>
    'LazyBLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/label")['default']>
    'LazyBLegend': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/legend")['default']>
    'LazyBOption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/option")['default']>
    'LazyBValidFeedback': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validFeedback")['default']>
    'LazyBValidTooltip': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validTooltip")['default']>
    'LazyBHr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/hr")['default']>
    'LazyBImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']>
    'LazyBList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
    'LazyBListItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
    'LazyBMain': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/main")['default']>
    'LazyBParagraph': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']>
    'LazyBPicture': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/picture")['default']>
    'LazyBAnchor': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']>
    'LazyBButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/button")['default']>
    'LazyBH1': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h1")['default']>
    'LazyBH2': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h2")['default']>
    'LazyBH3': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h3")['default']>
    'LazyBH4': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h4")['default']>
    'LazyBH5': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h5")['default']>
    'LazyBH6': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h6")['default']>
    'LazyBHeadings': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']>
    'LazyBInline': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']>
    'LazyBSmall': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/small")['default']>
    'LazyBStrong': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/strong")['default']>
    'LazyBCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/caption")['default']>
    'LazyBTable': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/table")['default']>
    'LazyBTbody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tbody")['default']>
    'LazyBTd': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/td")['default']>
    'LazyBTfoot': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tfoot")['default']>
    'LazyBTh': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/th")['default']>
    'LazyBThead': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/thead")['default']>
    'LazyBTr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tr")['default']>
    'LazyAccordion': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordion")['default']>
    'LazyAccordionBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionBody")['default']>
    'LazyAccordionButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionButton")['default']>
    'LazyAccordionCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionCollapse")['default']>
    'LazyAccordionHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionHeader")['default']>
    'LazyAccordionItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionItem")['default']>
    'LazyAlert': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alert")['default']>
    'LazyAlertHeading': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertHeading")['default']>
    'LazyAlertLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertLink")['default']>
    'LazyBackdrop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/backdrop")['default']>
    'LazyBadge': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/badge")['default']>
    'LazyBreadcrumb': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumb")['default']>
    'LazyBreadcrumbItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumbItem")['default']>
    'LazyButtonGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonGroup")['default']>
    'LazyButtonToolbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonToolbar")['default']>
    'LazyCheckboxToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/checkboxToggleButton")['default']>
    'LazyCloseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/closeButton")['default']>
    'LazyRadioToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/radioToggleButton")['default']>
    'LazyCard': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/card")['default']>
    'LazyCardBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardBody")['default']>
    'LazyCardFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardFooter")['default']>
    'LazyCardGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardGroup")['default']>
    'LazyCardHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardHeader")['default']>
    'LazyCardImg': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImg")['default']>
    'LazyCardImgBottom': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgBottom")['default']>
    'LazyCardImgOverlay': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgOverlay")['default']>
    'LazyCardImgTop': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgTop")['default']>
    'LazyCardLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardLink")['default']>
    'LazyCardSubTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardSubTitle")['default']>
    'LazyCardText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardText")['default']>
    'LazyCardTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardTitle")['default']>
    'LazyCarousel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carousel")['default']>
    'LazyCarouselCaption': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselCaption")['default']>
    'LazyCarouselControl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselControl")['default']>
    'LazyCarouselIndicators': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicators")['default']>
    'LazyCarouselIndicatorsButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicatorsButton")['default']>
    'LazyCarouselInner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselInner")['default']>
    'LazyCarouselItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItem")['default']>
    'LazyCarouselItemImage': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItemImage")['default']>
    'LazyCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapse")['default']>
    'LazyCollapseButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapseButton")['default']>
    'LazyGrid': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/grid")['default']>
    'LazyGridCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/gridCol")['default']>
    'LazyDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdown")['default']>
    'LazyDropdownItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItem")['default']>
    'LazyDropdownItemDivider': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemDivider")['default']>
    'LazyDropdownItemText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemText")['default']>
    'LazyDropdownMenu': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownMenu")['default']>
    'LazyDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggle")['default']>
    'LazyDropdownToggleSplit': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggleSplit")['default']>
    'LazyCol': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/col")['default']>
    'LazyContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/container")['default']>
    'LazyRow': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/row")['default']>
    'LazyIconLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/iconLink/iconLink")['default']>
    'LazyListGroup': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroup")['default']>
    'LazyListGroupItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItem")['default']>
    'LazyListGroupItemAction': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemAction")['default']>
    'LazyListGroupItemLabel': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemLabel")['default']>
    'LazyListGroupList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupList")['default']>
    'LazyModal': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modal")['default']>
    'LazyModalBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalBody")['default']>
    'LazyModalContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalContent")['default']>
    'LazyModalDialog': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalDialog")['default']>
    'LazyModalFooter': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalFooter")['default']>
    'LazyModalHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalHeader")['default']>
    'LazyModalTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalTitle")['default']>
    'LazyModalToggleButton': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalToggleButton")['default']>
    'LazyNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/nav")['default']>
    'LazyNavItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItem")['default']>
    'LazyNavItemDropdown': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdown")['default']>
    'LazyNavItemDropdownToggle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdownToggle")['default']>
    'LazyNavLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navLink")['default']>
    'LazyNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navList")['default']>
    'LazyTabContent': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabContent")['default']>
    'LazyTabPane': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabPane")['default']>
    'LazyNavbar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbar")['default']>
    'LazyNavbarBrand': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarBrand")['default']>
    'LazyNavbarCollapse': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarCollapse")['default']>
    'LazyNavbarNav': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNav")['default']>
    'LazyNavbarNavList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNavList")['default']>
    'LazyNavbarText': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarText")['default']>
    'LazyNavbarToggler': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarToggler")['default']>
    'LazyOffcanvas': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvas")['default']>
    'LazyOffcanvasBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasBody")['default']>
    'LazyOffcanvasHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasHeader")['default']>
    'LazyOffcanvasTitle': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasTitle")['default']>
    'LazyPageItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageItem")['default']>
    'LazyPageLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageLink")['default']>
    'LazyPagination': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pagination")['default']>
    'LazyProgress': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progress")['default']>
    'LazyProgressBar': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progressBar")['default']>
    'LazySpinner': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/spinner")['default']>
    'LazyToast': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toast")['default']>
    'LazyToastBody': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastBody")['default']>
    'LazyToastContainer': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastContainer")['default']>
    'LazyToastHeader': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastHeader")['default']>
    'LazyVerticalRule': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
    'LazyIconCSS': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
    'LazyBP': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']>
    'LazyBH': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']>
    'LazyBA': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']>
    'LazyBSpan': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']>
    'LazyBImg': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']>
    'LazyBDd': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']>
    'LazyBDt': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']>
    'LazyBDl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']>
    'LazyBUl': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
    'LazyBLi': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
    'LazyVr': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']>
    'LazyList': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
    'LazyListItem': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
    'LazyBLink': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/nuxt/bslink")['default']>
    'LazyBIcon': LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/icon")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CarouselComponent: typeof import("../components/carousel-component.vue")['default']
export const ContentHome: typeof import("../components/content-home.vue")['default']
export const ContentIndex: typeof import("../components/content-index.vue")['default']
export const FooterComponent: typeof import("../components/footer-component.vue")['default']
export const Jumbotron: typeof import("../components/jumbotron.vue")['default']
export const NavbarComponent: typeof import("../components/navbar-component.vue")['default']
export const BInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/Input")['default']
export const BBlock: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/block")['default']
export const BBlockquote: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquote")['default']
export const BBlockquoteFigure: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFigure")['default']
export const BBlockquoteFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFooter")['default']
export const BDefinitionDescription: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']
export const BDefinitionList: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']
export const BDefinitionTerm: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']
export const BDiv: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/div")['default']
export const BFigure: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figure")['default']
export const BFigureCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureCaption")['default']
export const BFigureImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureImage")['default']
export const BFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/footer")['default']
export const BColFormLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLabel")['default']
export const BColFormLegend: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLegend")['default']
export const BDatalist: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/datalist")['default']
export const BFieldset: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/fieldset")['default']
export const BForm: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/form")['default']
export const BFormCheck: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheck")['default']
export const BFormCheckInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckInput")['default']
export const BFormCheckLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckLabel")['default']
export const BFormColor: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formColor")['default']
export const BFormControl: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formControl")['default']
export const BFormFile: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFile")['default']
export const BFormFloating: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFloating")['default']
export const BFormInput: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formInput")['default']
export const BFormLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formLabel")['default']
export const BFormRange: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formRange")['default']
export const BFormSelect: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSelect")['default']
export const BFormSwitch: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSwitch")['default']
export const BFormText: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formText")['default']
export const BFormTextarea: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formTextarea")['default']
export const BInputGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroup")['default']
export const BInputGroupText: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroupText")['default']
export const BLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/label")['default']
export const BLegend: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/legend")['default']
export const BOption: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/option")['default']
export const BValidFeedback: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validFeedback")['default']
export const BValidTooltip: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validTooltip")['default']
export const BHr: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/hr")['default']
export const BImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']
export const BList: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
export const BListItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
export const BMain: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/main")['default']
export const BParagraph: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']
export const BPicture: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/picture")['default']
export const BAnchor: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']
export const BButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/button")['default']
export const BH1: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h1")['default']
export const BH2: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h2")['default']
export const BH3: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h3")['default']
export const BH4: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h4")['default']
export const BH5: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h5")['default']
export const BH6: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h6")['default']
export const BHeadings: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']
export const BInline: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']
export const BSmall: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/small")['default']
export const BStrong: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/strong")['default']
export const BCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/caption")['default']
export const BTable: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/table")['default']
export const BTbody: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tbody")['default']
export const BTd: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/td")['default']
export const BTfoot: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tfoot")['default']
export const BTh: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/th")['default']
export const BThead: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/thead")['default']
export const BTr: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tr")['default']
export const Accordion: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordion")['default']
export const AccordionBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionBody")['default']
export const AccordionButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionButton")['default']
export const AccordionCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionCollapse")['default']
export const AccordionHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionHeader")['default']
export const AccordionItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionItem")['default']
export const Alert: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alert")['default']
export const AlertHeading: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertHeading")['default']
export const AlertLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertLink")['default']
export const Backdrop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/backdrop")['default']
export const Badge: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/badge")['default']
export const Breadcrumb: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumb")['default']
export const BreadcrumbItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumbItem")['default']
export const ButtonGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonGroup")['default']
export const ButtonToolbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonToolbar")['default']
export const CheckboxToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/checkboxToggleButton")['default']
export const CloseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/closeButton")['default']
export const RadioToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/radioToggleButton")['default']
export const Card: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/card")['default']
export const CardBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardBody")['default']
export const CardFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardFooter")['default']
export const CardGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardGroup")['default']
export const CardHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardHeader")['default']
export const CardImg: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImg")['default']
export const CardImgBottom: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgBottom")['default']
export const CardImgOverlay: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgOverlay")['default']
export const CardImgTop: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgTop")['default']
export const CardLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardLink")['default']
export const CardSubTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardSubTitle")['default']
export const CardText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardText")['default']
export const CardTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardTitle")['default']
export const Carousel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carousel")['default']
export const CarouselCaption: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselCaption")['default']
export const CarouselControl: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselControl")['default']
export const CarouselIndicators: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicators")['default']
export const CarouselIndicatorsButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicatorsButton")['default']
export const CarouselInner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselInner")['default']
export const CarouselItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItem")['default']
export const CarouselItemImage: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItemImage")['default']
export const Collapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapse")['default']
export const CollapseButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapseButton")['default']
export const Grid: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/grid")['default']
export const GridCol: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/gridCol")['default']
export const Dropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdown")['default']
export const DropdownItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItem")['default']
export const DropdownItemDivider: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemDivider")['default']
export const DropdownItemText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemText")['default']
export const DropdownMenu: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownMenu")['default']
export const DropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggle")['default']
export const DropdownToggleSplit: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggleSplit")['default']
export const Col: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/col")['default']
export const Container: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/container")['default']
export const Row: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/row")['default']
export const IconLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/iconLink/iconLink")['default']
export const ListGroup: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroup")['default']
export const ListGroupItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItem")['default']
export const ListGroupItemAction: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemAction")['default']
export const ListGroupItemLabel: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemLabel")['default']
export const ListGroupList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupList")['default']
export const Modal: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modal")['default']
export const ModalBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalBody")['default']
export const ModalContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalContent")['default']
export const ModalDialog: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalDialog")['default']
export const ModalFooter: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalFooter")['default']
export const ModalHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalHeader")['default']
export const ModalTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalTitle")['default']
export const ModalToggleButton: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalToggleButton")['default']
export const Nav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/nav")['default']
export const NavItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItem")['default']
export const NavItemDropdown: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdown")['default']
export const NavItemDropdownToggle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdownToggle")['default']
export const NavLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navLink")['default']
export const NavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navList")['default']
export const TabContent: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabContent")['default']
export const TabPane: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabPane")['default']
export const Navbar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbar")['default']
export const NavbarBrand: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarBrand")['default']
export const NavbarCollapse: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarCollapse")['default']
export const NavbarNav: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNav")['default']
export const NavbarNavList: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNavList")['default']
export const NavbarText: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarText")['default']
export const NavbarToggler: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarToggler")['default']
export const Offcanvas: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvas")['default']
export const OffcanvasBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasBody")['default']
export const OffcanvasHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasHeader")['default']
export const OffcanvasTitle: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasTitle")['default']
export const PageItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageItem")['default']
export const PageLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageLink")['default']
export const Pagination: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pagination")['default']
export const Progress: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progress")['default']
export const ProgressBar: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progressBar")['default']
export const Spinner: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/spinner")['default']
export const Toast: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toast")['default']
export const ToastBody: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastBody")['default']
export const ToastContainer: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastContainer")['default']
export const ToastHeader: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastHeader")['default']
export const VerticalRule: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const BP: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']
export const BH: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']
export const BA: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']
export const BSpan: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']
export const BImg: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']
export const BDd: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']
export const BDt: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']
export const BDl: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']
export const BUl: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
export const BLi: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
export const Vr: typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']
export const List: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']
export const ListItem: typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']
export const BLink: typeof import("../node_modules/usebootstrap/dist/runtime/components/nuxt/bslink")['default']
export const BIcon: typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/icon")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCarouselComponent: LazyComponent<typeof import("../components/carousel-component.vue")['default']>
export const LazyContentHome: LazyComponent<typeof import("../components/content-home.vue")['default']>
export const LazyContentIndex: LazyComponent<typeof import("../components/content-index.vue")['default']>
export const LazyFooterComponent: LazyComponent<typeof import("../components/footer-component.vue")['default']>
export const LazyJumbotron: LazyComponent<typeof import("../components/jumbotron.vue")['default']>
export const LazyNavbarComponent: LazyComponent<typeof import("../components/navbar-component.vue")['default']>
export const LazyBInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/Input")['default']>
export const LazyBBlock: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/block")['default']>
export const LazyBBlockquote: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquote")['default']>
export const LazyBBlockquoteFigure: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFigure")['default']>
export const LazyBBlockquoteFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/blockquote/blockquoteFooter")['default']>
export const LazyBDefinitionDescription: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']>
export const LazyBDefinitionList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']>
export const LazyBDefinitionTerm: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']>
export const LazyBDiv: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/div")['default']>
export const LazyBFigure: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figure")['default']>
export const LazyBFigureCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureCaption")['default']>
export const LazyBFigureImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/figure/figureImage")['default']>
export const LazyBFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/footer")['default']>
export const LazyBColFormLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLabel")['default']>
export const LazyBColFormLegend: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/colFormLegend")['default']>
export const LazyBDatalist: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/datalist")['default']>
export const LazyBFieldset: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/fieldset")['default']>
export const LazyBForm: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/form")['default']>
export const LazyBFormCheck: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheck")['default']>
export const LazyBFormCheckInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckInput")['default']>
export const LazyBFormCheckLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formCheckLabel")['default']>
export const LazyBFormColor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formColor")['default']>
export const LazyBFormControl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formControl")['default']>
export const LazyBFormFile: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFile")['default']>
export const LazyBFormFloating: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formFloating")['default']>
export const LazyBFormInput: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formInput")['default']>
export const LazyBFormLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formLabel")['default']>
export const LazyBFormRange: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formRange")['default']>
export const LazyBFormSelect: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSelect")['default']>
export const LazyBFormSwitch: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formSwitch")['default']>
export const LazyBFormText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formText")['default']>
export const LazyBFormTextarea: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/formTextarea")['default']>
export const LazyBInputGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroup")['default']>
export const LazyBInputGroupText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/inputGroupText")['default']>
export const LazyBLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/label")['default']>
export const LazyBLegend: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/legend")['default']>
export const LazyBOption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/option")['default']>
export const LazyBValidFeedback: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validFeedback")['default']>
export const LazyBValidTooltip: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/form/validTooltip")['default']>
export const LazyBHr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/hr")['default']>
export const LazyBImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']>
export const LazyBList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
export const LazyBListItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
export const LazyBMain: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/main")['default']>
export const LazyBParagraph: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']>
export const LazyBPicture: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/picture")['default']>
export const LazyBAnchor: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']>
export const LazyBButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/button")['default']>
export const LazyBH1: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h1")['default']>
export const LazyBH2: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h2")['default']>
export const LazyBH3: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h3")['default']>
export const LazyBH4: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h4")['default']>
export const LazyBH5: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h5")['default']>
export const LazyBH6: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/h6")['default']>
export const LazyBHeadings: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']>
export const LazyBInline: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']>
export const LazyBSmall: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/small")['default']>
export const LazyBStrong: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/strong")['default']>
export const LazyBCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/caption")['default']>
export const LazyBTable: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/table")['default']>
export const LazyBTbody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tbody")['default']>
export const LazyBTd: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/td")['default']>
export const LazyBTfoot: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tfoot")['default']>
export const LazyBTh: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/th")['default']>
export const LazyBThead: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/thead")['default']>
export const LazyBTr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlTable/tr")['default']>
export const LazyAccordion: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordion")['default']>
export const LazyAccordionBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionBody")['default']>
export const LazyAccordionButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionButton")['default']>
export const LazyAccordionCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionCollapse")['default']>
export const LazyAccordionHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionHeader")['default']>
export const LazyAccordionItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/accordion/accordionItem")['default']>
export const LazyAlert: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alert")['default']>
export const LazyAlertHeading: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertHeading")['default']>
export const LazyAlertLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/alert/alertLink")['default']>
export const LazyBackdrop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/backdrop/backdrop")['default']>
export const LazyBadge: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/badge/badge")['default']>
export const LazyBreadcrumb: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumb")['default']>
export const LazyBreadcrumbItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/breadcrumb/breadcrumbItem")['default']>
export const LazyButtonGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonGroup")['default']>
export const LazyButtonToolbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/buttonToolbar")['default']>
export const LazyCheckboxToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/checkboxToggleButton")['default']>
export const LazyCloseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/closeButton")['default']>
export const LazyRadioToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/button/radioToggleButton")['default']>
export const LazyCard: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/card")['default']>
export const LazyCardBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardBody")['default']>
export const LazyCardFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardFooter")['default']>
export const LazyCardGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardGroup")['default']>
export const LazyCardHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardHeader")['default']>
export const LazyCardImg: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImg")['default']>
export const LazyCardImgBottom: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgBottom")['default']>
export const LazyCardImgOverlay: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgOverlay")['default']>
export const LazyCardImgTop: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardImgTop")['default']>
export const LazyCardLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardLink")['default']>
export const LazyCardSubTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardSubTitle")['default']>
export const LazyCardText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardText")['default']>
export const LazyCardTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/card/cardTitle")['default']>
export const LazyCarousel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carousel")['default']>
export const LazyCarouselCaption: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselCaption")['default']>
export const LazyCarouselControl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselControl")['default']>
export const LazyCarouselIndicators: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicators")['default']>
export const LazyCarouselIndicatorsButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselIndicatorsButton")['default']>
export const LazyCarouselInner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselInner")['default']>
export const LazyCarouselItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItem")['default']>
export const LazyCarouselItemImage: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/carousel/carouselItemImage")['default']>
export const LazyCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapse")['default']>
export const LazyCollapseButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/collapse/collapseButton")['default']>
export const LazyGrid: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/grid")['default']>
export const LazyGridCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/cssgrid/gridCol")['default']>
export const LazyDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdown")['default']>
export const LazyDropdownItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItem")['default']>
export const LazyDropdownItemDivider: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemDivider")['default']>
export const LazyDropdownItemText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownItemText")['default']>
export const LazyDropdownMenu: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownMenu")['default']>
export const LazyDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggle")['default']>
export const LazyDropdownToggleSplit: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/dropdown/dropdownToggleSplit")['default']>
export const LazyCol: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/col")['default']>
export const LazyContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/container")['default']>
export const LazyRow: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/grid/row")['default']>
export const LazyIconLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/iconLink/iconLink")['default']>
export const LazyListGroup: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroup")['default']>
export const LazyListGroupItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItem")['default']>
export const LazyListGroupItemAction: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemAction")['default']>
export const LazyListGroupItemLabel: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupItemLabel")['default']>
export const LazyListGroupList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/listGroup/listGroupList")['default']>
export const LazyModal: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modal")['default']>
export const LazyModalBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalBody")['default']>
export const LazyModalContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalContent")['default']>
export const LazyModalDialog: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalDialog")['default']>
export const LazyModalFooter: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalFooter")['default']>
export const LazyModalHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalHeader")['default']>
export const LazyModalTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalTitle")['default']>
export const LazyModalToggleButton: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/modal/modalToggleButton")['default']>
export const LazyNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/nav")['default']>
export const LazyNavItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItem")['default']>
export const LazyNavItemDropdown: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdown")['default']>
export const LazyNavItemDropdownToggle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navItemDropdownToggle")['default']>
export const LazyNavLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navLink")['default']>
export const LazyNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/navList")['default']>
export const LazyTabContent: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabContent")['default']>
export const LazyTabPane: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/nav/tabPane")['default']>
export const LazyNavbar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbar")['default']>
export const LazyNavbarBrand: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarBrand")['default']>
export const LazyNavbarCollapse: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarCollapse")['default']>
export const LazyNavbarNav: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNav")['default']>
export const LazyNavbarNavList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarNavList")['default']>
export const LazyNavbarText: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarText")['default']>
export const LazyNavbarToggler: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/navbar/navbarToggler")['default']>
export const LazyOffcanvas: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvas")['default']>
export const LazyOffcanvasBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasBody")['default']>
export const LazyOffcanvasHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasHeader")['default']>
export const LazyOffcanvasTitle: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/offcanvas/offcanvasTitle")['default']>
export const LazyPageItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageItem")['default']>
export const LazyPageLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pageLink")['default']>
export const LazyPagination: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/pagination/pagination")['default']>
export const LazyProgress: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progress")['default']>
export const LazyProgressBar: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/progress/progressBar")['default']>
export const LazySpinner: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/spinner/spinner")['default']>
export const LazyToast: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toast")['default']>
export const LazyToastBody: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastBody")['default']>
export const LazyToastContainer: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastContainer")['default']>
export const LazyToastHeader: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/toast/toastHeader")['default']>
export const LazyVerticalRule: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
export const LazyBP: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/paragraph")['default']>
export const LazyBH: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/headings")['default']>
export const LazyBA: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/anchor")['default']>
export const LazyBSpan: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlInline/inline")['default']>
export const LazyBImg: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/image")['default']>
export const LazyBDd: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionDescription")['default']>
export const LazyBDt: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionTerm")['default']>
export const LazyBDl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/definitionList")['default']>
export const LazyBUl: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
export const LazyBLi: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
export const LazyVr: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/bootstrap/verticalRule/verticalRule")['default']>
export const LazyList: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/list")['default']>
export const LazyListItem: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/htmlBlock/listItem")['default']>
export const LazyBLink: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/nuxt/bslink")['default']>
export const LazyBIcon: LazyComponent<typeof import("../node_modules/usebootstrap/dist/runtime/components/icon/icon")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
