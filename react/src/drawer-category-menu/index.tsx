import React, { useMemo, useCallback } from 'react';
import DrawerCategoryMenu from './drawer';
import RamdaCore from 'celsia.store-utils/ramdaCore';
import { schema } from './schema';

const CategoryMenuDrawer = (props: any) => {
  const children = RamdaCore.pathOr([], ['children'], props);
  const additionalInfo = RamdaCore.pathOr([], ['additionalInfo'], props);
  const departments = RamdaCore.pathOr([], ['departments'], props);
  

  const onDrawer = useCallback(() => {
    const element = RamdaCore.pathOr({ click: () => {} }, [0] ,document.getElementsByClassName('celsia-menu-0-x-openIconContainer'));
    element.click();
  }, []);

  return useMemo(() => {
    return (<DrawerCategoryMenu onDrawer={onDrawer} childrenCustom={children} additionalInfo={additionalInfo} departments={departments} />)
  }, [children, additionalInfo, departments]);
}

CategoryMenuDrawer.getSchema = () => {
  return schema;
}

export default CategoryMenuDrawer;
