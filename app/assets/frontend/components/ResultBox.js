import React, {PropTypes} from 'react';

const ResultBox = ({bookingDetail}) => {
  let extras;
  if(bookingDetail.extras.length > 0){
     extras = bookingDetail.extras.map((element)=>{
        return (
           <div key={element}>- {element}</div>
        );
    })
  }
  return (
    <section className="col-sm-4">
        <div id="resultbox">
          <h3>{bookingDetail.service_type==='rc'?'Regular Clean': 'Spring Clean'}</h3>
          <div>{bookingDetail.bed_no} Bedrooms</div>
          <div>{bookingDetail.bath_no} Bathrooms</div>
          <br/>
          <br/>
            <div>{bookingDetail.service_type === 'sc' ? 'Extras:': ''}
              {extras ? extras: ''}
            </div>
            <div id='totalhour'>{bookingDetail.total_hours} hours</div>
              <div id="totalprice">Totlal: ${bookingDetail.total_price}</div>
        </div>
    </section>
  );
};


ResultBox.propTypes = {
   bookingDetail: PropTypes.object.isRequired
};

export default ResultBox;
