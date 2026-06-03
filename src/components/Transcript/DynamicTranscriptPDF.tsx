import BGFBTCSE00088385 from './Json/BGFBTCSE00088385.json';
import BGFBTCSE00078594 from './Json/BGFBTCSE00078594.json';
import BGFMTCSE00095457 from './Json/BGFMTCSE00095457.json';
import BGFMTCSE00074975 from './Json/BGFMTCSE00074975.json';
import { useParams } from 'react-router-dom';
import MarksSheetPDF from './MarksSheetPDF';

const DynamicTranscriptPDF = () => {
  const { enrollmentNumber } = useParams();

  let data: any;
  switch (enrollmentNumber) {
    case 'BGFBTCSE00088385':
      data = BGFBTCSE00088385;
      break;
    case 'BGFBTCSE00078594':
      data = BGFBTCSE00078594;
      break;
    case 'BGFMTCSE00095457':
      data = BGFMTCSE00095457;
      break;
    case 'BGFMTCSE00074975':
      data = BGFMTCSE00074975;
      break;
    default:
      return <div>No data found for this enrollment number.</div>;
  }

  return <MarksSheetPDF data={data} />;
};

export default DynamicTranscriptPDF;
