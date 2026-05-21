type Props = {
    currentPage: number;
    setCurrentPage: (v: number) => void;
  
    totalPages: number;
    setTotalPages: (v: number) => void;
  
    progress: number;
  };
  
  export function ReadingProgressInputs({
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    progress,
  }: Props) {
    return (
      <div className="mb-3">
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            placeholder="Current page"
            className="w-full border p-2 rounded"
          />
  
          <input
            type="number"
            value={totalPages}
            onChange={(e) => setTotalPages(Number(e.target.value))}
            placeholder="Total pages"
            className="w-full border p-2 rounded"
          />
        </div>
  
        <p className="text-sm text-text-muted">Progress: {progress}%</p>
      </div>
    );
  }