export const schema = {
    title: "Category Menu Desktop",
    type: "object",
    properties: {
        imageDrawer: {
            title: 'Imagen Logo Drawer',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader'
            }
        },
        colorFondoHover: {
            title: 'color fondo hover',
            type: 'string',
            widget: {
                'ui:widget': 'color'
            },
            default: "#9438A7"
        },
        colorTextHover:{
            title: 'color texto Hover',
            type: 'string',
            widget: {
                'ui:widget': 'color'
            },
            default: "#FFFFFF"

        },
        departments: {
            minItems: 0,
            title: 'Departments',
            type: 'array',
            items: {
                title: 'Department',
                type: 'object',
                properties: {
                    __editorItemTitle: {
                        title: 'Title',
                        type: 'string',
                    },
                    url: {
                        title: 'link',
                        type: 'string',
                    },
                    ico: {
                        title: 'icon',
                        type: 'string',
                        widget: {
                            'ui:widget': 'textarea'
                        }
                    },
                   
                    categories: {
                        minItems: 0,
                        title: 'Categories',
                        type: 'array',
                        items: {
                            title: 'Category',
                            type: 'object',
                            properties: {
                                __editorItemTitle: {
                                    title: 'Title',
                                    type: 'string',
                                },
                                url: {
                                    title: 'link',
                                    type: 'string',
                                },
                                
                                subcategories: {
                                    minItems: 0,
                                    title: 'Sub categories',
                                    type: 'array',
                                    items: {
                                        title: 'Sub category',
                                        type: 'object',
                                        properties: {
                                            __editorItemTitle: {
                                                title: 'Title',
                                                type: 'string',
                                            },
                                            url: {
                                                title: 'link',
                                                type: 'string',
                                            }
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        linksExtras: {
            minItems: 0,
            title: 'Links Extras',
            type: 'array',
            maxItams: 3,
            items: {
                title: 'Info',
                type: 'object',
                properties: {
                    __editorItemTitle: {
                        title: 'Title',
                        type: 'string',
                    },
                    url: {
                        title: 'link',
                        type: 'string',
                    },
                    ico: {
                        title: 'icon',
                        type: 'string',
                        widget: {
                            'ui:widget': 'textarea'
                        }
                    }
                }
            }
        },
        linksPrincipal: {
            minItems: 0,
            title: 'Links Principales',
            type: 'array',
            maxItams: 3,
            items: {
                title: 'Info',
                type: 'object',
                properties: {
                    __editorItemTitle: {
                        title: 'Title',
                        type: 'string',
                    },
                    url: {
                        title: 'link',
                        type: 'string',
                    }
                }
            }
        },
        additionalInfo: {
            minItems: 0,
            title: 'Información Adicional',
            type: 'array',
            maxItams: 3,
            items: {
              title: 'Info',
              type: 'object',
              properties: {
                __editorItemTitle: {
                  title: 'Title',
                  type: 'string',
                },
                url: {
                    title: 'link',
                    type: 'string',
                }
              }
            }
        },
        scroll:{
            title: "Mostrar/Ocultar Scroll", 
            type:"boolean", 
            default:false
        }
        
        
    }
}