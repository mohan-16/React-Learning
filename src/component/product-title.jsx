// import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
export default function ProductTitle ({title,rating,sub,lines}) {
    return(
      <> <div>
            <h2>{title}</h2>
        </div>
        <div>
            <span className="badge bg-success m-1">{rating} </span>
            <span className="text-secondary p-2">{sub}</span>
            
        </div>
        <div>{lines}
          
        </div>
        </> 
    )
}

ProductTitle.defaultProps={
    title:"APPLE iPhone 12 (Blue, 64 GB)",
    rating:"4.6 ",
    sub:"2,04,726 Ratings & 13,609 Reviews",
    lines:  <ul>
    <li>64 GB ROM</li>
    <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
    <li>12MP + 12MP | 12MP Front Camera</li>
    <li>A14 Bionic Chip with Next Generation Neural Engine Processor</li>
    <li>Ceramic Shield</li>
    <li>Industry-leading IP68 Water Resistance</li>
    <li>All Screen OLED Display</li>
    <li>12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording</li>
    <li>Brand Warranty for 1 Year</li>
</ul>
}