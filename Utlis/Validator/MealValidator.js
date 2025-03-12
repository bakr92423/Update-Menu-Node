const {check}=  require('express-validator') 
const valid= require('../../midllwere/validator')





exports.addMealVilidator=[

    check('name').notEmpty().withMessage('ادخل اسم الفئة').isLength({min:2}).withMessage('  لايجب اسم الفئة اقل من حرفين ')
    .isLength({max:20}).withMessage('  لايجب اسم الفئة اكثر من 20حرف '),
    check('price').notEmpty().withMessage('ادخل االسعر ').isLength({min:2}).withMessage('ادخل سعر صحيح')
    .isLength({max:4}).withMessage('  لادخل سعر مناسب'),
    check('description').notEmpty().withMessage('ادخل الوصف ').isLength({min:5}).withMessage('  لايجب ان يكون الوصف  اقل من  5 حروف ')
    .isLength({max:100}).withMessage('  لايجب ان يكون الوصف  اكثر من  100 حروف '),
    
    valid
    
    
]
exports.updateMealVilidator=[

    check('id').isMongoId().withMessage('رقم العنصر غير صالح'),
    
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