import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DropZone({ onCode }: { onCode: (code: string) => void }) {
  const onDrop = useCallback(async (files: File[]) => {
    const text = await files[0].text();
    onCode(text);
  }, [onCode]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}> 
      <input {...getInputProps()} />
      {isDragActive ? 'أفلت الملف هنا ...' : 'اسحب وأفلت ملف الكود هنا'}
    </div>
  );
}
