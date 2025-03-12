const {check}=  require('express-validator') 
const valid= require('../../midllwere/validator')





exports.addCategoryVilidator=[

    check('name').notEmpty().withMessage('ادخل اسم الفئة').isLength({min:2}).withMessage('  لايجب اسم الفئة اقل من حرفين ')
    .isLength({max:20}).withMessage('  لايجب اسم الفئة اكثر من 20حرف '),
    valid
    
    
]
exports.updateCategoryVilidator=[

    check('id').isMongoId().withMessage('رقم العنصر غير صالح'),
    check('name').notEmpty().withMessage('ادخل اسم الفئة').isLength({min:2}).withMessage('  لايجب اسم الفئة اقل من حرفين ')
    .isLength({max:20}).withMessage('  لايجب اسم الفئة اكثر من 20حرف '),
    valid
    
    
]
exports.getCategoryVilidator=[

    check('id').isMongoId().withMessage('رقم العنصر غير صالح'),

    valid
    
    
]
exports.deleteCategoryVilidator=[

    check('id').isMongoId().withMessage('رقم العنصر غير صالح'),

    valid
    
    
]