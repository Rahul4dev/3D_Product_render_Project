/* eslint-disable react/prop-types */
import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container ">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask AI..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="5"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyle="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyle="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyle="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
