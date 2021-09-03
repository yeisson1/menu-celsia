import Style from './MenuDesktop.css';
import className from 'classnames';
import React, { useState } from 'react';
import FlexLayout from 'vtex.flex-layout/FlexLayout';
import { Icon } from 'vtex.store-icons';
import { schema } from './schema';
import { pathOr } from 'ramda';
import { IDepartment, ICategories, IAditionalInfo, ILinksPrincipal, IBaseDomain } from './IDrawerMenuDesktop';


const MenuDesktop = (props: any) => {

    const [open, setOpen] = useState(false);
    const [showCategory, setShowCategory] = useState(false);

    const imageDrawer = pathOr("", ['imageDrawer'], props);
    const departments = pathOr([], ['departments'], props);
    const colorFondoHover = pathOr("", ['colorFondoHover'], props);
    const colorTextHover = pathOr("", ['colorTextHover'], props);
    const additionalInfo = pathOr([], ['additionalInfo'], props);
    const linksPrincipal = pathOr([], ['linksPrincipal'], props);
    const linksExtras = pathOr([], ['linksExtras'], props);
    const scroll = pathOr(false, ['scroll'], props);

    console.log("scroll", scroll);

    const [hover, setHover] = useState(false);
    const hoverDepartment = (type: boolean) => setHover(type);
    const [position, setPosition] = useState(0);
    const [positionCategory, setPositionCategory] = useState<number>(0);
    const [positionSubCategory, setPositionSubCategory] = useState<number>(0);
    const [hoverButtonOpen, setHoverButtonOpen]  = useState(false);

    const classes = className(Style.drawerCustom,  open ? Style.active : null);


    const handleDrawer = () => {

        if(open) { 
            setShowCategory(false);
            hoverDepartment(false);

        }
        setOpen(!open)
    };

    return (
        <>
        <div style = {{backgroundColor:'#f0f0f0'}}>
        <FlexLayout fullWidth={false}>
            <div className={Style.rowMenu}>
                        <div className={Style.initialRowMenu}>
                            <div className={Style.buttonOpenDrawer} onClick={handleDrawer} onMouseOver={() => setHoverButtonOpen(true)} onMouseOut={() => setHoverButtonOpen(false)} 
                                style={{backgroundColor: hoverButtonOpen ? colorFondoHover:'#D0D0D0', color: hoverButtonOpen ? colorTextHover:'#59595B' }}>
                                <Icon id="mpa-bars" size={22} /><div className={Style.titleButtonOpen}> Categoria</div>
                            </div>

                            <div className={Style.itemsDrawer}>
                                {linksPrincipal?.map((link:ILinksPrincipal, k:number) => {
                                    return <>
                                        <a className={Style.itemPrincipal} href={link.url} >{link.__editorItemTitle}</a>    
                                    </>
                                })}
                            </div>
                        </div>

                        <div className={Style.containerAditionalInformation}>
                            {additionalInfo?.map((aditional:IAditionalInfo, k:number) => {
                                return <>
                                        <a className={Style.itemAditionalInformation} href={aditional.url} >{aditional.__editorItemTitle}</a>
                                </>
                            })}
                        </div>
            </div>
            </FlexLayout>
            </div>
            {open && <div className={Style.drawerCustomOverlay} onClick={handleDrawer}></div>}


            <div className={classes} >
                <div className={`${Style.menuContainer} ${scroll ? Style.menuContainerScroll:null}`}>
                    <div className={Style.headerCategories}>
                        <div className={Style.containerLogoDrawer}>
                            <img src={imageDrawer} className={Style.imageDrawer}></img>

                        </div>
                        <div className={Style.closeDrawer} onClick={handleDrawer}><Icon id="sti-close--line" size={30} /></div>  
                    </div> 

                <div className={Style.containerItemsDrawer}>
                    <div className={Style.containerDepartment} onMouseOver={() => {hoverDepartment(false); setShowCategory(false)}}>
                        {departments.map((department:IDepartment, index:number) => {
                            return <>
                                <a onMouseOver={(a) => { a.stopPropagation(); a.preventDefault(); hoverDepartment(true); setPosition(index); setShowCategory(false);}}  
                                    className={Style.itemDepartment} href={department.url} style={{backgroundColor: hover && index === position ? colorFondoHover:'#FFFF', color: hover && index === position ? colorTextHover:'#59595B'}}>
                                    <div className={`${Style.iconDepartment} ${hover && index === position ? Style.icoDeparmentActive:null}`} dangerouslySetInnerHTML={{ __html: department.ico }} ></div>
                                    <div className={Style.titleDepartment}>{department.__editorItemTitle}</div>
                                    {(departments[index]?.categories) && <div className={Style.containerArrow}><Icon id="nav-caret--right" size={12} /></div>}
                                </a>
                            </>
                        })}
                    </div>

                    <div className={Style.containerItemsExtra}>
                        <div className={Style.headerExtras}>Servicios</div>
                        {linksExtras?.map((extra:IBaseDomain, f:number) => {
                            return <>
                                <a className={Style.containerItemDepartment} href={extra.url} >
                                    <div className={Style.iconDepartment} dangerouslySetInnerHTML={{ __html: extra.ico }} ></div>
                                    <div className={Style.itemTitleExtra}>{extra.__editorItemTitle}</div>
                                </a>  
                            </>
                        })}
                                    
                    </div>
                </div>
                  
                </div>


                {(hover && departments[position]?.categories) && <div className={Style.menuContainerCategory}  onMouseOver={() => {setShowCategory(true);}}>

                    {<div className={Style.headerCategories}></div>} 
                    <div className={Style.containerCategoryOptions}>
                        {departments[position]?.categories?.map((category:ICategories, i:number) => {                    
                            
                            return <>
                                <a onMouseOver={(a) => { a.stopPropagation(); a.preventDefault(); setShowCategory(true); setPositionCategory(i)}}
                                    style={{backgroundColor: hover && i === positionCategory ? colorFondoHover:'#FFFF', color: hover && i === positionCategory ? colorTextHover:'#59595B' }} className={Style.itemCategory} href={category.url}>
                                        <div className={Style.titleDepartment}>{category.__editorItemTitle}</div>
                                        {(departments[position]?.categories[i]?.subcategories?.map) && <div className={Style.containerArrow}><Icon id="nav-caret--right" size={12} /></div>}
                                </a>
                                
                            </>
                        })}
                    </div>
                    <a className={Style.itemCategory} href={departments[position].url}>Ver todo</a>
                        
                </div>}
                
                
                
                {(showCategory && (departments[position]?.categories[positionCategory]?.subcategories)) && <div className={Style.menuContainerCategory} >
                    {<div className={Style.headerCategories}></div>}
                    <div className={Style.containerCategoryOptions}>
                        {departments[position]?.categories[positionCategory]?.subcategories?.map((subcategory:IBaseDomain, j:number) => {
                            
                            return <>
                                <a onClick={() => { setShowCategory(false); hoverDepartment(false)}} onMouseOver={(a) => {a.stopPropagation(); a.preventDefault(); setHoverButtonOpen(true); hoverDepartment(true);setPositionSubCategory(j);}} className={Style.itemCategory}
                                    onMouseOut={() => setHoverButtonOpen(false)} style={{backgroundColor: hover && j === positionSubCategory ? colorFondoHover:'#FFFF', color: hover && j === positionSubCategory ? colorTextHover:'#59595B' }}  href={subcategory.url}>
                                    <div className={Style.titleDepartment}>{subcategory.__editorItemTitle}</div> 
                                </a>
                             
                            </>
                        })}
                    </div>
                </div>}


            </div>   
        </>
    )
}

MenuDesktop.getSchema = () => {
    return schema
}

export default MenuDesktop;