import SELECT_OPTIONS from "../../Constants";
import PDFIcon from '../../assets/icons/svgs/Pdf';
import ImageIcon from '../../assets/icons/svgs/Image';

const HealthRecordDashboard = () => {

  const { healthRecordData } = SELECT_OPTIONS;

  const HealthDataRow = ({label, value, fileName, isFirst, title}) => {
    if (
      label == 'id' ||
      (title === 'Patient Documents' && label === 'fileType')
    )
      return;

    const padding = isFirst ? 'pl-4' : ' ';
    const isPdf = value.endsWith('.pdf');
    const isImage = /\.(png|jpg|jpeg)$/i.test(value);

    return (
      <div className={padding + ' text-sm text-[#6B7280]'}>
        <p>
          {label == 'file' ? (
            <span className="inline-flex gap-1 cursor-pointer">
              {isPdf && <PDFIcon className=" mr-2 text-gray-400" />}
              {isImage && <ImageIcon className=" mr-2 text-gray-400" />}
              {fileName}
            </span>
          ) : (
            <span className={padding + 'text-[#6B7280]'}>
              {label.includes('_') ? label.replace(/_/g, ' ') : label}
            </span>
          )}
        </p>
        <p>
          <span
            className={`font-medium ${label != 'fileName' ? 'text-black' : 'text-[#4284DB]'}`}>
            {label != 'file' ? value : ''}
          </span>
        </p>
      </div>
    );
  };

  const Card = ({title, action, children}) => {
    return (
      <div className="bg-white m-4 rounded-lg shadow-sm px-4 py-4">
        {(action || title) && (
          <div className="flex justify-between">
            <div className="h-10 flex justify-between items-center py-3">
              <h3 className="text-lg font-semibold text-black">{title}</h3>
              {action && <div>{action}</div>}
            </div>
            {title === 'Patient Generated Health Data' && (
              <button className=" w-full sm:w-auto px-4 h-9 bg-primary text-white cursor-pointer rounded-full text-sm">
                {' '}
                Add New{' '}
              </button>
            )}
          </div>
        )}
        <div className="px-4 py-2">{children}</div>
      </div>
    );
  };

  return (
    <>
      {healthRecordData.map(
        ({id, title, data}) => (
          console.log('Actual data is', data),
          (
            <Card key={id} title={title}>
              <div className="h-40 overflow-x-auto overflow-y-auto">
                {data.map((item, index) => (
                  <div className="flex border border-light-gray rounded-lg min-w-max my-4 flex-col">
                    <div
                      key={index}
                      className="grid grid-flow-col auto-cols-fr py-4">
                      {Object.entries(item)
                        .filter(rowData => rowData[0] !== 'id')
                        .map((data, index) => (
                          <HealthDataRow
                            label={data[0]}
                            value={data[1]}
                            isFirst={index === 0}
                            title={title}
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )
        ),
      )}
    </>
  );
}
export default HealthRecordDashboard;