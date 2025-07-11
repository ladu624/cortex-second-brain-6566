
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { EnhancedInput } from "@/components/common/EnhancedInput";
import { AdvancedFilterModal } from "@/components/modals/AdvancedFilterModal";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchFilter({ searchTerm, onSearchChange }: SearchFilterProps) {
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

  const handleFilterClick = () => {
    console.log('Opening advanced filter modal');
    setShowAdvancedFilter(true);
  };

  const handleFilterApply = (filters: any) => {
    console.log('Applying filters:', filters);
    // Logique d'application des filtres
    setShowAdvancedFilter(false);
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <EnhancedInput
                defaultValue={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Rechercher dans vos recherches sauvegardées..."
                context="search"
                enableVoice={true}
              />
            </div>
            <Button variant="outline" onClick={handleFilterClick}>
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </Button>
          </div>
        </CardContent>
      </Card>

      {showAdvancedFilter && (
        <AdvancedFilterModal
          isOpen={showAdvancedFilter}
          onClose={() => setShowAdvancedFilter(false)}
          onApply={handleFilterApply}
        />
      )}
    </React.Fragment>
  );
}
