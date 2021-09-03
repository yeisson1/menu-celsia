import React, { useState } from 'react';
import { Drawer, DrawerCloseButton, DrawerHeader } from 'vtex.store-drawer';
import { Icon } from 'vtex.store-icons';
import DrawerStyle from './drawer.css';

const DrawerCategoryMenu = ({
  onDrawer,
  childrenCustom,
  additionalInfo,
  departments = [],

}: any) => {
  
  const [showDepartment, setShowDepartment] = useState<boolean>(true);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showSubCategory, setShowSubCategory] = useState<boolean>(false);
  const [positionDepartment, setPositionDepartment] = useState<number>();
  const [positionCategory, setPositionCategory] = useState<number>(0);
 
  return (
    <div>
      <div className={DrawerStyle.buttonActionDrawer} onClick={onDrawer}>
        <Icon id="mpa-bars" />
      </div>
      <Drawer
        slideDirection="leftToRight"
        position="left"
        header={
          <DrawerHeader>
            {childrenCustom}
            <div className={DrawerStyle.buttonActionDrawer}>
              <DrawerCloseButton />
            </div>
          </DrawerHeader>
        }
      >
        
        {showDepartment  && <div> <div className={DrawerStyle.containerDepartmentsMobile}>
            {departments.map((department:any, index:number) => {
                return <>
                    {(departments[index]?.categories) ? <a className={DrawerStyle.itemDeparmentMobile} onClick={(a) => {setShowDepartment(false); setShowCategory(true); a.preventDefault();a.stopPropagation(); setPositionDepartment(index)}}>
                      <div className={DrawerStyle.imgDepartmentMobile} dangerouslySetInnerHTML={{ __html: department.ico }} ></div>            
                      <div className={DrawerStyle.titleDepartmentMobile}>{department.__editorItemTitle}</div>
                      {(departments[index]?.categories) && <div className={DrawerStyle.containerArrowMobile}><Icon id="nav-caret--right" size={11} /></div>}
                      </a>:<a className={DrawerStyle.itemDeparmentMobile} onClick={() => {setShowDepartment(false); setShowCategory(false); setPositionDepartment(index)}} href={department.url}>
                      <div className={DrawerStyle.imgDepartmentMobile} dangerouslySetInnerHTML={{ __html: department.ico }} ></div>                  
                      <div className={DrawerStyle.titleDepartmentMobile}>{department.__editorItemTitle}</div>
                    </a>}
                </>
            })}
          </div>
          <div className={DrawerStyle.containerLinksAditionalMobile}>
            <div className={DrawerStyle.titleServices}>Servicios</div>
            {additionalInfo.map((link:any, index:number) => {
                  return <>           
                        <a className={DrawerStyle.itemService} href={link.url}>
                          <div dangerouslySetInnerHTML={{ __html: link.ico }} ></div> 
                          <div className={DrawerStyle.titleService} >{link.__editorItemTitle}</div>
                        </a>
                  </>
            })}
          </div>
        </div>}
        
        {showCategory && <div className={DrawerStyle.containerCategories}>
            <div  onClick={() => {setShowDepartment(true); setShowCategory(false);}} className={DrawerStyle.returnToDepartment}>
              <Icon id="nav-caret--left" size={11} />
              <div className={DrawerStyle.textReturn}>{departments[positionDepartment].__editorItemTitle}</div>
            </div>
            <div>
              {departments[positionDepartment]?.categories?.map((category:any, k:number) => {
                      
                      return <>
                           {departments[positionDepartment]?.categories[k]?.subcategories ? <a className={DrawerStyle.itemCategoryMobile} href={category.url} onClick={() => {setPositionCategory(k); setShowSubCategory(false); setShowCategory(false)}}>
                              <div dangerouslySetInnerHTML={{ __html: category.ico }}></div>
                              <div className={DrawerStyle.titleService} >{category.__editorItemTitle}</div>
                              <div className={DrawerStyle.containerArrowMobile} onClick={(a) => {setPositionCategory(k); setShowSubCategory(true); a.preventDefault();a.stopPropagation(); setShowCategory(false)}}><Icon id="nav-caret--right" size={11} /></div>
                            </a>:<a className={DrawerStyle.itemCategoryMobile} href={category.url} onClick={() => {setPositionCategory(k); setShowSubCategory(false); setShowCategory(false)}}>
                              <div dangerouslySetInnerHTML={{ __html: category.ico }}></div>
                              <div className={DrawerStyle.titleService} >{category.__editorItemTitle}</div>
                            </a>}
                      </>
                })}
                <a href={departments[positionDepartment]?.url} className={DrawerStyle.titleShowAll}>Ver Todo</a>
            </div>
          </div>}

          {showSubCategory  && <div className={DrawerStyle.containerCategories}>
              <div  onClick={() => {setShowCategory(true); setShowSubCategory(false);}} className={DrawerStyle.returnToDepartment}>
                <Icon id="nav-caret--left" size={11} />
                <div className={DrawerStyle.textReturn}>Volver</div>
              </div>
              
              {departments[positionDepartment]?.categories[positionCategory]?.subcategories?.map((subcategory:any, h:number) => {
                    return <>           
                          <a className={DrawerStyle.itemCategoryMobile} href={subcategory.url} >
                            <div dangerouslySetInnerHTML={{ __html: subcategory.ico }}></div>
                            <div className={DrawerStyle.titleService} >{subcategory.__editorItemTitle}</div>
                          </a>
                    </>
              })}    
          </div>}

      </Drawer>
    </div>
  );
};

export default DrawerCategoryMenu;
