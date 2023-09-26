interface Topic {
    name: string;
    progress: number;
  }
  
  export default function fetchDataFromAPI(): Promise<Topic[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { name: 'Topic 1', progress: Math.random() * 100 },
          { name: 'Topic 2', progress: Math.random() * 100 },
        ]);
      }, 2000);
    });
  }
  