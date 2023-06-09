const calculateDiscount = () => {
     const originalPrice = parseFloat(document.getElementById('originalPrice').value);
     const discountedPrice = parseFloat(document.getElementById('discountedPrice').value);

     const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
     const roundedDiscountPercentage = discountPercentage.toFixed(2);

     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = `You saved ${roundedDiscountPercentage}%!`;
 }