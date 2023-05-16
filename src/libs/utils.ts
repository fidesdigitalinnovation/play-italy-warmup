
export const getEntityPrefix = (entityName: string) => {
    return `${entityName}#`
}

export const buildEntityPK = (entityName : string, value : string) =>{
    return `${entityName}#${value}`
}