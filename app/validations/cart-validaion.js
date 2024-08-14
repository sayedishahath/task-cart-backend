const cartValidationSchema = {
    'lineItems.*.productId' : {
        notEmpty : {
            errorMessage : 'product is required'
        }
    },
    'lineItems.*.quantity' : {
        notEmpty : {
            errorMessage : 'qty is required'
        },
        isNumeric:{
            errorMessage: "qty should be a numeric value"
        }
    },
}

module.exports = cartValidationSchema